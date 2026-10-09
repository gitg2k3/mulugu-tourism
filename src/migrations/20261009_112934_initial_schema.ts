import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_places_category" AS ENUM('heritage', 'lakes-eco-tourism', 'waterfalls', 'wildlife-forests', 'spiritual-temples', 'adventure');
  CREATE TYPE "public"."enum_businesses_category" AS ENUM('eco-stay', 'stay', 'dining', 'guides', 'handicrafts', 'transport');
  CREATE TYPE "public"."enum_businesses_pricing_range" AS ENUM('₹', '₹₹', '₹₹₹');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'business_owner');
  CREATE TABLE "places_gallery" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "url" varchar NOT NULL,
    "alt" varchar,
    "caption" varchar
  );

  CREATE TABLE "places_highlights" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "item" varchar
  );

  CREATE TABLE "places_tips_for_visitors" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "tip" varchar
  );

  CREATE TABLE "places_nearby_places" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "slug" varchar
  );

  CREATE TABLE "places_nearby_businesses" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "slug" varchar
  );

  CREATE TABLE "places" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "telugu_title" varchar,
    "slug" varchar NOT NULL,
    "tagline" varchar,
    "category" "enum_places_category" NOT NULL,
    "category_label" varchar,
    "description" varchar NOT NULL,
    "location" varchar NOT NULL,
    "coordinates_lat" numeric,
    "coordinates_lng" numeric,
    "featured_image" varchar NOT NULL,
    "timings" varchar,
    "entry_fee" varchar,
    "best_time_to_visit" varchar,
    "distance_from_district_h_q" varchar,
    "is_featured" boolean DEFAULT false,
    "is_u_n_e_s_c_o" boolean DEFAULT false,
    "rating" numeric,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "businesses_amenities" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "item" varchar
  );

  CREATE TABLE "businesses" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "category" "enum_businesses_category" NOT NULL,
    "category_label" varchar,
    "tagline" varchar,
    "description" varchar,
    "address" varchar,
    "location" varchar,
    "coordinates_lat" numeric,
    "coordinates_lng" numeric,
    "phone" varchar NOT NULL,
    "email" varchar,
    "website" varchar,
    "featured_image" varchar,
    "pricing_range" "enum_businesses_pricing_range",
    "rating" numeric,
    "review_count" numeric,
    "is_verified" boolean DEFAULT false,
    "is_featured" boolean DEFAULT false,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "categories" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "description" varchar,
    "icon" varchar,
    "color" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "events" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "tagline" varchar,
    "description" varchar NOT NULL,
    "start_date" timestamp(3) with time zone NOT NULL,
    "end_date" timestamp(3) with time zone,
    "location" varchar NOT NULL,
    "category" varchar,
    "cover_image" varchar NOT NULL,
    "is_featured" boolean DEFAULT false,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "articles" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "excerpt" varchar,
    "category" varchar,
    "read_time" varchar,
    "content" varchar,
    "cover_image" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "itineraries_highlights" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "item" varchar
  );

  CREATE TABLE "itineraries_days_activities" (
    "_order" integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "item" varchar
  );

  CREATE TABLE "itineraries_days_recommended_places" (
    "_order" integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "slug" varchar
  );

  CREATE TABLE "itineraries_days" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "day" numeric,
    "title" varchar,
    "description" varchar
  );

  CREATE TABLE "itineraries" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "slug" varchar NOT NULL,
    "duration" varchar NOT NULL,
    "summary" varchar,
    "cover_image" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "media" (
    "id" serial PRIMARY KEY NOT NULL,
    "alt" varchar NOT NULL,
    "caption" varchar,
    "_objectkey" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "url" varchar,
    "thumbnail_u_r_l" varchar,
    "filename" varchar,
    "mime_type" varchar,
    "filesize" numeric,
    "width" numeric,
    "height" numeric,
    "focal_x" numeric,
    "focal_y" numeric,
    "sizes_thumbnail_url" varchar,
    "sizes_thumbnail_width" numeric,
    "sizes_thumbnail_height" numeric,
    "sizes_thumbnail_mime_type" varchar,
    "sizes_thumbnail_filesize" numeric,
    "sizes_thumbnail_filename" varchar,
    "sizes_card_url" varchar,
    "sizes_card_width" numeric,
    "sizes_card_height" numeric,
    "sizes_card_mime_type" varchar,
    "sizes_card_filesize" numeric,
    "sizes_card_filename" varchar,
    "sizes_hero_url" varchar,
    "sizes_hero_width" numeric,
    "sizes_hero_height" numeric,
    "sizes_hero_mime_type" varchar,
    "sizes_hero_filesize" numeric,
    "sizes_hero_filename" varchar
  );

  CREATE TABLE "users_sessions" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "created_at" timestamp(3) with time zone,
    "expires_at" timestamp(3) with time zone NOT NULL
  );

  CREATE TABLE "users" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar,
    "role" "enum_users_role" DEFAULT 'editor' NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "email" varchar NOT NULL,
    "reset_password_token" varchar,
    "reset_password_expiration" timestamp(3) with time zone,
    "salt" varchar,
    "hash" varchar,
    "reset_password_requested_at" timestamp(3) with time zone,
    "login_attempts" numeric DEFAULT 0,
    "lock_until" timestamp(3) with time zone
  );

  CREATE TABLE "payload_kv" (
    "id" serial PRIMARY KEY NOT NULL,
    "key" varchar NOT NULL,
    "data" jsonb NOT NULL
  );

  CREATE TABLE "payload_locked_documents" (
    "id" serial PRIMARY KEY NOT NULL,
    "global_slug" varchar,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "payload_locked_documents_rels" (
    "id" serial PRIMARY KEY NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" varchar NOT NULL,
    "places_id" integer,
    "businesses_id" integer,
    "categories_id" integer,
    "events_id" integer,
    "articles_id" integer,
    "itineraries_id" integer,
    "media_id" integer,
    "users_id" integer
  );

  CREATE TABLE "payload_preferences" (
    "id" serial PRIMARY KEY NOT NULL,
    "key" varchar,
    "value" jsonb,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "payload_preferences_rels" (
    "id" serial PRIMARY KEY NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" varchar NOT NULL,
    "users_id" integer
  );

  CREATE TABLE "payload_migrations" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar,
    "batch" numeric,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "site_settings" (
    "id" serial PRIMARY KEY NOT NULL,
    "site_name" varchar DEFAULT 'Discover Mulugu' NOT NULL,
    "tagline" varchar DEFAULT 'The UNESCO Heritage & Eco-Tourism Capital of Telangana',
    "contact_phone" varchar DEFAULT '+91 8715 220000',
    "contact_email" varchar DEFAULT 'contact@discovermulugu.org',
    "emergency_police" varchar DEFAULT '100',
    "emergency_ambulance" varchar DEFAULT '108',
    "emergency_forest_helpline" varchar DEFAULT '1800 425 5364',
    "updated_at" timestamp(3) with time zone,
    "created_at" timestamp(3) with time zone
  );

  CREATE TABLE "homepage" (
    "id" serial PRIMARY KEY NOT NULL,
    "hero_heading" varchar DEFAULT 'Discover Mulugu: Sacred Temples & Untamed Wilderness',
    "hero_subtitle" varchar DEFAULT 'Home to the UNESCO World Heritage Ramappa Temple, Laknavaram''s 13 island lakes, roaring Bogatha Falls, and the spiritual power of Medaram Jatara.',
    "hero_background_url" varchar DEFAULT 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80',
    "updated_at" timestamp(3) with time zone,
    "created_at" timestamp(3) with time zone
  );

  CREATE TABLE "footer" (
    "id" serial PRIMARY KEY NOT NULL,
    "about_text" varchar DEFAULT 'An independent community eco-tourism initiative dedicated to showcasing Mulugu''s rich Kakatiya heritage, pristine nature, and local cultural traditions.',
    "copyright" varchar DEFAULT '© 2026 Discover Mulugu. All rights reserved.',
    "updated_at" timestamp(3) with time zone,
    "created_at" timestamp(3) with time zone
  );

  ALTER TABLE "places_gallery" ADD CONSTRAINT "places_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "places_highlights" ADD CONSTRAINT "places_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "places_tips_for_visitors" ADD CONSTRAINT "places_tips_for_visitors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "places_nearby_places" ADD CONSTRAINT "places_nearby_places_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "places_nearby_businesses" ADD CONSTRAINT "places_nearby_businesses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "businesses_amenities" ADD CONSTRAINT "businesses_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."businesses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "itineraries_highlights" ADD CONSTRAINT "itineraries_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "itineraries_days_activities" ADD CONSTRAINT "itineraries_days_activities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."itineraries_days"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "itineraries_days_recommended_places" ADD CONSTRAINT "itineraries_days_recommended_places_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."itineraries_days"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "itineraries_days" ADD CONSTRAINT "itineraries_days_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_places_fk" FOREIGN KEY ("places_id") REFERENCES "public"."places"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_businesses_fk" FOREIGN KEY ("businesses_id") REFERENCES "public"."businesses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_itineraries_fk" FOREIGN KEY ("itineraries_id") REFERENCES "public"."itineraries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "places_gallery_order_idx" ON "places_gallery" USING btree ("_order");
  CREATE INDEX "places_gallery_parent_id_idx" ON "places_gallery" USING btree ("_parent_id");
  CREATE INDEX "places_highlights_order_idx" ON "places_highlights" USING btree ("_order");
  CREATE INDEX "places_highlights_parent_id_idx" ON "places_highlights" USING btree ("_parent_id");
  CREATE INDEX "places_tips_for_visitors_order_idx" ON "places_tips_for_visitors" USING btree ("_order");
  CREATE INDEX "places_tips_for_visitors_parent_id_idx" ON "places_tips_for_visitors" USING btree ("_parent_id");
  CREATE INDEX "places_nearby_places_order_idx" ON "places_nearby_places" USING btree ("_order");
  CREATE INDEX "places_nearby_places_parent_id_idx" ON "places_nearby_places" USING btree ("_parent_id");
  CREATE INDEX "places_nearby_businesses_order_idx" ON "places_nearby_businesses" USING btree ("_order");
  CREATE INDEX "places_nearby_businesses_parent_id_idx" ON "places_nearby_businesses" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "places_slug_idx" ON "places" USING btree ("slug");
  CREATE INDEX "places_updated_at_idx" ON "places" USING btree ("updated_at");
  CREATE INDEX "places_created_at_idx" ON "places" USING btree ("created_at");
  CREATE INDEX "businesses_amenities_order_idx" ON "businesses_amenities" USING btree ("_order");
  CREATE INDEX "businesses_amenities_parent_id_idx" ON "businesses_amenities" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "businesses_slug_idx" ON "businesses" USING btree ("slug");
  CREATE INDEX "businesses_updated_at_idx" ON "businesses" USING btree ("updated_at");
  CREATE INDEX "businesses_created_at_idx" ON "businesses" USING btree ("created_at");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE UNIQUE INDEX "events_slug_idx" ON "events" USING btree ("slug");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE UNIQUE INDEX "articles_slug_idx" ON "articles" USING btree ("slug");
  CREATE INDEX "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX "articles_created_at_idx" ON "articles" USING btree ("created_at");
  CREATE INDEX "itineraries_highlights_order_idx" ON "itineraries_highlights" USING btree ("_order");
  CREATE INDEX "itineraries_highlights_parent_id_idx" ON "itineraries_highlights" USING btree ("_parent_id");
  CREATE INDEX "itineraries_days_activities_order_idx" ON "itineraries_days_activities" USING btree ("_order");
  CREATE INDEX "itineraries_days_activities_parent_id_idx" ON "itineraries_days_activities" USING btree ("_parent_id");
  CREATE INDEX "itineraries_days_recommended_places_order_idx" ON "itineraries_days_recommended_places" USING btree ("_order");
  CREATE INDEX "itineraries_days_recommended_places_parent_id_idx" ON "itineraries_days_recommended_places" USING btree ("_parent_id");
  CREATE INDEX "itineraries_days_order_idx" ON "itineraries_days" USING btree ("_order");
  CREATE INDEX "itineraries_days_parent_id_idx" ON "itineraries_days" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "itineraries_slug_idx" ON "itineraries" USING btree ("slug");
  CREATE INDEX "itineraries_updated_at_idx" ON "itineraries" USING btree ("updated_at");
  CREATE INDEX "itineraries_created_at_idx" ON "itineraries" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_places_id_idx" ON "payload_locked_documents_rels" USING btree ("places_id");
  CREATE INDEX "payload_locked_documents_rels_businesses_id_idx" ON "payload_locked_documents_rels" USING btree ("businesses_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");
  CREATE INDEX "payload_locked_documents_rels_itineraries_id_idx" ON "payload_locked_documents_rels" USING btree ("itineraries_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "places_gallery" CASCADE;
  DROP TABLE "places_highlights" CASCADE;
  DROP TABLE "places_tips_for_visitors" CASCADE;
  DROP TABLE "places_nearby_places" CASCADE;
  DROP TABLE "places_nearby_businesses" CASCADE;
  DROP TABLE "places" CASCADE;
  DROP TABLE "businesses_amenities" CASCADE;
  DROP TABLE "businesses" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "articles" CASCADE;
  DROP TABLE "itineraries_highlights" CASCADE;
  DROP TABLE "itineraries_days_activities" CASCADE;
  DROP TABLE "itineraries_days_recommended_places" CASCADE;
  DROP TABLE "itineraries_days" CASCADE;
  DROP TABLE "itineraries" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TYPE "public"."enum_places_category";
  DROP TYPE "public"."enum_businesses_category";
  DROP TYPE "public"."enum_businesses_pricing_range";
  DROP TYPE "public"."enum_users_role";`)
}
