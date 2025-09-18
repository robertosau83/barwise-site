import { createSignal } from 'solid-js';
import { supabase } from '../supabaseClient';

const RegisterForm = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [nickname, setNickname] = createSignal('');
  const [ragioneSociale, setRagioneSociale] = createSignal('');
  const [error, setError] = createSignal('');
  const [message, setMessage] = createSignal('');

  const handleRegister = async (e: Event) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      // Step 1: Crea l'utente in auth.users
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: email(),
        password: password(),
      });

      if (signUpError || !signUpData.user) {
        setError(signUpError?.message || 'Error during user registration.');
        return;
      }

      const userId = signUpData.user.id;

      // Step 2: Chiamare la funzione RPC per inserire la compagnia
      const { data: companyData, error: companyError } = await supabase.rpc('insert_company', {
        ragione_sociale: ragioneSociale(),
      });

      if (companyError || !companyData) {
        setError(companyError?.message || 'Error during company creation.');
        return;
      }

      const companyId = companyData;

      // Puoi ora usare `companyId` per ulteriori operazioni, come l'inserimento in `users_companies`.

      // Step 3: Chiamare la funzione RPC per inserire l'associazione user-company
      const { error: userCompanyError } = await supabase.rpc('insert_user_company', {
        user_id: userId,
        company_id: companyId,
        nickname: nickname(),
        role: ['ADMIN'],
      });

      if (userCompanyError) {
        setError(userCompanyError.message || 'Error during user-company association.');
        return;
      }

      setMessage('Registration successful! You can now log in.');

    } catch (err) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div class="max-w-md mx-auto p-4">
      <h2 class="text-xl mb-4 text-center">Register</h2>
      {error() && <p class="text-red-500">{error()}</p>}
      {message() && <p class="text-green-500">{message()}</p>}

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email()}
          onInput={(e) => setEmail(e.currentTarget.value)}
          class="block w-full p-2 mb-2 border"
          required
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password()}
          onInput={(e) => setPassword(e.currentTarget.value)}
          class="block w-full p-2 mb-2 border"
          required
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname()}
          onInput={(e) => setNickname(e.currentTarget.value)}
          class="block w-full p-2 mb-2 border"
          required
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Ragione Sociale"
          value={ragioneSociale()}
          onInput={(e) => setRagioneSociale(e.currentTarget.value)}
          class="block w-full p-2 mb-2 border"
          required
        />
      </div>

      <button type="submit" class="bg-blue-500 text-white p-2 w-full rounded-lg"
        onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
