# week7-SPN
Brace yourselves for Saucy Psychic Ninjas' Dinner Blog(!!!).

## Outline
Our site will be a blog about what was cooked for dinner at the guesthouse (or elsewhere). Users can submit new posts about meals, read about specific meals, and ultimately comment on posts and maybe search/filter posts.

## Aims
- Heroku
- Use Joi validation

## User Stories
**As a bored internet browser who navigates to the home page:**
> I want to see a list of posts about different dinners which were cooked

> So that I can see if there are any I would like to read more about

**As a confused user who has navigated to the site erroneously:**
> I want to be confronted by a home page which is visually appealing

> So that even though I choose to leave the site, I leave with a positive impression of both the site, and the Saucy Psychic Ninjas

**As a proud chef who has recently masterminded a fantastic dinner:**
> I want to be able to write a painstakingly detailed post about the entire process

> So that I can re-read the post with my friends at various points in the future and laugh and be merry

## Local install instructions
- In your command line run:

```bash
git clone https://github.com/FACN1/week7-SPN.git

cd week7-SPN

npm i

atom config.env

```

- SAVE the config.env file

- Ask us for the DB_URL (on gitter)

- Enter DB_URL within config.env in your text editor.


## Database Schema:
### Posts
Column      |     Type    |    Modifiers   | More info           
--- | --- | --- | ---
id               | integer                     | not null default | serial primary key
dish             | character varying(255)      | not null |
description      | text                        |          |
chef_name        | character varying(255)      | not null |
background_color | character varying(25)       | not null |
date_published   | timestamp without time zone | not null default now() |

## Stretch Goals
- Add chefs db table(/user logins)
- Add comments db table (i.e. comments on posts)
- Add search/filter options to index page
