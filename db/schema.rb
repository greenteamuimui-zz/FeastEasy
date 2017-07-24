# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170724164537) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "photo_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "kitchen_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id"], name: "index_favorites_on_kitchen_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "kitchens", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "city_id", null: false
    t.string "name", null: false
    t.string "cuisine", null: false
    t.integer "size", null: false
    t.string "feast_time", null: false
    t.string "address", null: false
    t.string "phone", null: false
    t.string "about", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_kitchens_on_city_id"
    t.index ["user_id"], name: "index_kitchens_on_user_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.integer "kitchen_id", null: false
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id"], name: "index_pictures_on_kitchen_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "kitchen_id", null: false
    t.integer "user_id", null: false
    t.integer "seats", null: false
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id"], name: "index_reservations_on_kitchen_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "kitchen_id", null: false
    t.integer "user_id", null: false
    t.string "title", null: false
    t.string "body", null: false
    t.integer "food_score", null: false
    t.integer "atmosphere_score", null: false
    t.integer "host_score", null: false
    t.integer "price_score", null: false
    t.float "overall_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id"], name: "index_reviews_on_kitchen_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username"
  end

end
