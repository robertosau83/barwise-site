export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      areas: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string;
          order_id: number;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
          order_id?: number;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          order_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "areas_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      categories: {
        Row: {
          company_id: string;
          courses_mode: boolean;
          created_at: string;
          id: string;
          name: string;
          order_id: number;
          product_default_image: string | null;
          products_visualization_mode: number;
          show_searchbar: boolean;
          show_tags: boolean;
          tag_selection_mode: number;
        };
        Insert: {
          company_id: string;
          courses_mode?: boolean;
          created_at?: string;
          id?: string;
          name: string;
          order_id?: number;
          product_default_image?: string | null;
          products_visualization_mode?: number;
          show_searchbar?: boolean;
          show_tags?: boolean;
          tag_selection_mode?: number;
        };
        Update: {
          company_id?: string;
          courses_mode?: boolean;
          created_at?: string;
          id?: string;
          name?: string;
          order_id?: number;
          product_default_image?: string | null;
          products_visualization_mode?: number;
          show_searchbar?: boolean;
          show_tags?: boolean;
          tag_selection_mode?: number;
        };
        Relationships: [
          {
            foreignKeyName: "categories_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      categories_products: {
        Row: {
          category_id: string;
          company_id: string;
          created_at: string;
          id: string;
          order_id: number | null;
          product_id: string;
        };
        Insert: {
          category_id: string;
          company_id: string;
          created_at?: string;
          id?: string;
          order_id?: number | null;
          product_id: string;
        };
        Update: {
          category_id?: string;
          company_id?: string;
          created_at?: string;
          id?: string;
          order_id?: number | null;
          product_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "categories_products_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "categories_products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "categories_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      companies: {
        Row: {
          created_at: string;
          id: string;
          logo_URL: string | null;
          name: string;
          show_payed_button_on_sender: boolean;
          show_temporary_notification_popups_on_sender: boolean;
        };
        Insert: {
          created_at?: string;
          id?: string;
          logo_URL?: string | null;
          name: string;
          show_payed_button_on_sender?: boolean;
          show_temporary_notification_popups_on_sender?: boolean;
        };
        Update: {
          created_at?: string;
          id?: string;
          logo_URL?: string | null;
          name?: string;
          show_payed_button_on_sender?: boolean;
          show_temporary_notification_popups_on_sender?: boolean;
        };
        Relationships: [];
      };
      courses: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string;
          order_id: number;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
          order_id?: number;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          order_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "courses_companies_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      orders: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          paid: boolean | null;
          state: Database["public"]["Enums"]["order_status"];
          table_id: string | null;
          tableRif_on_tableId_null: string | null;
          to_print: boolean | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          paid?: boolean | null;
          state?: Database["public"]["Enums"]["order_status"];
          table_id?: string | null;
          tableRif_on_tableId_null?: string | null;
          to_print?: boolean | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          paid?: boolean | null;
          state?: Database["public"]["Enums"]["order_status"];
          table_id?: string | null;
          tableRif_on_tableId_null?: string | null;
          to_print?: boolean | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "orders_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_table_id_fkey";
            columns: ["table_id"];
            isOneToOne: false;
            referencedRelation: "tables";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      orders_printersCycles: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          order_id: string;
          printersCycle_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          order_id: string;
          printersCycle_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          order_id?: string;
          printersCycle_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "orders_printersCycles_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_printersCycles_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_printersCycles_printersCycle_id_fkey";
            columns: ["printersCycle_id"];
            isOneToOne: false;
            referencedRelation: "printersCycles";
            referencedColumns: ["id"];
          },
        ];
      };
      orders_products: {
        Row: {
          comment: string | null;
          company_id: string;
          course_id: string | null;
          created_at: string;
          delivered: boolean | null;
          description: string | null;
          final_price: number | null;
          id: string;
          order_id: string;
          payed_quantity: number;
          price: number | null;
          product_id: string;
          quantity: number;
          variants_forPrint: string | null;
          variants_id: string[] | null;
          vessel_forPrint: string | null;
          vessel_id: string | null;
        };
        Insert: {
          comment?: string | null;
          company_id: string;
          course_id?: string | null;
          created_at?: string;
          delivered?: boolean | null;
          description?: string | null;
          final_price?: number | null;
          id?: string;
          order_id: string;
          payed_quantity?: number;
          price?: number | null;
          product_id: string;
          quantity: number;
          variants_forPrint?: string | null;
          variants_id?: string[] | null;
          vessel_forPrint?: string | null;
          vessel_id?: string | null;
        };
        Update: {
          comment?: string | null;
          company_id?: string;
          course_id?: string | null;
          created_at?: string;
          delivered?: boolean | null;
          description?: string | null;
          final_price?: number | null;
          id?: string;
          order_id?: string;
          payed_quantity?: number;
          price?: number | null;
          product_id?: string;
          quantity?: number;
          variants_forPrint?: string | null;
          variants_id?: string[] | null;
          vessel_forPrint?: string | null;
          vessel_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "orders_products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_products_course_id_fkey";
            columns: ["course_id"];
            isOneToOne: false;
            referencedRelation: "courses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      printers: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string;
          productId: number;
          protocolCode: number;
          serialNumber: string;
          vendorId: number;
          preBillPrinter: boolean;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
          productId: number;
          protocolCode: number;
          serialNumber: string;
          vendorId: number;
          preBillPrinter: boolean;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          productId?: number;
          protocolCode?: number;
          serialNumber?: string;
          vendorId?: number;
          preBillPrinter: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "printers_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      printersCycles: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string | null;
          order_id: number | null;
          printer_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name?: string | null;
          order_id?: number | null;
          printer_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string | null;
          order_id?: number | null;
          printer_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "printersCycles_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "printersCycles_printer_id_fkey";
            columns: ["printer_id"];
            isOneToOne: false;
            referencedRelation: "printers";
            referencedColumns: ["id"];
          },
        ];
      };
      printersCycles_products: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          printerCycle_id: string;
          product_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          printerCycle_id: string;
          product_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          printerCycle_id?: string;
          product_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "printersCycles_products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "printersCycles_products_printerCycle_id_fkey";
            columns: ["printerCycle_id"];
            isOneToOne: false;
            referencedRelation: "printersCycles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "printersCycles_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      products: {
        Row: {
          available: boolean;
          canceled: boolean;
          company_id: string;
          created_at: string;
          details: string | null;
          id: string;
          imageURL: string | null;
          name: string;
          short_name: string | null;
        };
        Insert: {
          available?: boolean;
          canceled?: boolean;
          company_id: string;
          created_at?: string;
          details?: string | null;
          id?: string;
          imageURL?: string | null;
          name: string;
          short_name?: string | null;
        };
        Update: {
          available?: boolean;
          canceled?: boolean;
          company_id?: string;
          created_at?: string;
          details?: string | null;
          id?: string;
          imageURL?: string | null;
          name?: string;
          short_name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      tables: {
        Row: {
          area_id: string;
          company_id: string;
          created_at: string;
          id: string;
          name: string;
        };
        Insert: {
          area_id: string;
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
        };
        Update: {
          area_id?: string;
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tables_area_id_fkey";
            columns: ["area_id"];
            isOneToOne: false;
            referencedRelation: "areas";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tables_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      tags: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string;
          order_id: number | null;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
          order_id?: number | null;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          order_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "tags_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      tags_products: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          product_id: string;
          tag_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          product_id: string;
          tag_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          product_id?: string;
          tag_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tags_products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tags_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tags_products_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tags";
            referencedColumns: ["id"];
          },
        ];
      };
      users_companies: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          logo_URL: string | null;
          name: string;
          roles: Database["public"]["Enums"]["role"][];
          updated_at: string;
          user_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          logo_URL?: string | null;
          name: string;
          roles: Database["public"]["Enums"]["role"][];
          updated_at?: string;
          user_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          logo_URL?: string | null;
          name?: string;
          roles?: Database["public"]["Enums"]["role"][];
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "users_companies_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_companies_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      variants: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string;
          order_id: number | null;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
          order_id?: number | null;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          order_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "variants_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      variants_products: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          price: number | null;
          product_id: string;
          variant_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          price?: number | null;
          product_id: string;
          variant_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          price?: number | null;
          product_id?: string;
          variant_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "variants_products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variants_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variants_products_variant_id_fkey";
            columns: ["variant_id"];
            isOneToOne: false;
            referencedRelation: "variants";
            referencedColumns: ["id"];
          },
        ];
      };
      vessels: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          name: string;
          order_id: number | null;
          show_name: boolean;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          name: string;
          order_id?: number | null;
          show_name?: boolean;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          name?: string;
          order_id?: number | null;
          show_name?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "vessels_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
        ];
      };
      vessels_products: {
        Row: {
          company_id: string;
          created_at: string;
          id: string;
          is_default: boolean;
          price: number | null;
          product_id: string;
          vessel_id: string;
        };
        Insert: {
          company_id: string;
          created_at?: string;
          id?: string;
          is_default?: boolean;
          price?: number | null;
          product_id: string;
          vessel_id: string;
        };
        Update: {
          company_id?: string;
          created_at?: string;
          id?: string;
          is_default?: boolean;
          price?: number | null;
          product_id?: string;
          vessel_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "vessels_products_company_id_fkey";
            columns: ["company_id"];
            isOneToOne: false;
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vessels_products_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vessels_products_vessel_id_fkey";
            columns: ["vessel_id"];
            isOneToOne: false;
            referencedRelation: "vessels";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_new_order: {
        Args: {
          items: Json;
          table_name: string;
          order_state: Database["public"]["Enums"]["order_status"];
          paid: boolean;
          to_print: boolean;
        };
        Returns: Json;
      };
      custom_access_token_hook: {
        Args: {
          event: Json;
        };
        Returns: Json;
      };
      insert_company: {
        Args: {
          ragione_sociale: string;
        };
        Returns: string; // Il tipo di dato restituito dall'ID della nuova company
      };
      insert_user_company: {
        Args: {
          user_id: string;
          company_id: string;
          nickname: string;
          role: ('ADMIN' | 'SENDER' | 'RECEIVER' | 'CASSA' | 'SETTINGS' | 'OPERATOR')[];
        };
        Returns: void;
      };
      get_orders_by_table: {
        Args: Record<PropertyKey, never>;
        Returns: {
          table_id: string;
          table_name: string;
          area_name: string;
          area_order: number;
          order_ids: string[];
          total_amount: number;
        }[];
      };
      get_orders_to_print: {
        Args: {
          printer_cycle_id: string;
        };
        Returns: {
          id: string;
          area_name: string;
          table_name: string;
          table_rif: string;
          user_name: string;
          created_at: string;
          quantity: number;
          description: string;
          price: number;
          final_price: number;
          vessel_id: string;
          variants_id: string[];
          comment: string;
          product_id: string;
          variants_forPrint: string;
          vessel_forPrint: string;
          course_name: string;
          course_order: number;
        }[];
      };
      update_orders_products_payed_quantity: {
        Args: {
          payload: Json;
        };
        Returns: undefined;
      };
    };
    Enums: {
      order_status:
        | "TO_PREPARE"
        | "PREPARING"
        | "READY_TO_DELIVER"
        | "DELIVERED"
        | "CANCELLED"
        | "PAYED";
      role: "ADMIN" | "SENDER" | "RECEIVER" | "CASSA" | "SETTINGS" | "OPERATOR";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          user_metadata: Json | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          user_metadata: Json | null;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          user_metadata?: Json | null;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          user_metadata?: Json | null;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
            columns: ["upload_id"];
            isOneToOne: false;
            referencedRelation: "s3_multipart_uploads";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      operation: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
