/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // AdminHasanK:IamAdmin
  await knex('users').del()
  await knex('users').insert([
    {
      user_name: 'test',
      email: 'test@isyeriegitimi.com',
      phone_number: '+907772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 9,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test2',
      email: 'test2@isyeriegitimi.com',
      phone_number: '+927772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test3',
      email: 'test3@isyeriegitimi.com',
      phone_number: '+937772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test4',
      email: 'test4@isyeriegitimi.com',
      phone_number: '+947772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test5',
      email: 'test5@isyeriegitimi.com',
      phone_number: '+957772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test6',
      email: 'test6@isyeriegitimi.com',
      phone_number: '+967772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test7',
      email: 'test7@isyeriegitimi.com',
      phone_number: '+977772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test8',
      email: 'test8@isyeriegitimi.com',
      phone_number: '+987772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test9',
      email: 'test9@isyeriegitimi.com',
      phone_number: '+997772957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test10',
      email: 'test10@isyeriegitimi.com',
      phone_number: '+909122957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test11',
      email: 'test11@isyeriegitimi.com',
      phone_number: '+903922957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test12',
      email: 'test12@isyeriegitimi.com',
      phone_number: '+907771957391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test13',
      email: 'test13@isyeriegitimi.com',
      phone_number: '+907773357391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    },
    {
      user_name: 'test14',
      email: 'test14@isyeriegitimi.com',
      phone_number: '+907772257391',
      // password -> 12345
      password: '$2a$12$LcKf5wGBdo.qr2rkXsaO4OD.5UDgjJ/FOOa8vg9UiOCPOySoS9FBe',
      first_name: 'Super',
      last_name: 'Admin',
      isAdmin: 1,
      access_rank: 8,
      whoCreated: 'Author: Stajyer Hasan Karataş',
      whoLastAuth: 'Author: Stajyer Hasan Karataş'
    }
  ]).then(console.log(" - - - ADMIN IS READY")).then(console.log("            Users added - - - "));
};