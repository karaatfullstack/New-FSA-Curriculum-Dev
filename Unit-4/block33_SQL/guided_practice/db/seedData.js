// require in the database adapter functions as you write them (createUser, createActivity...)
const { createUser, createSeedArticle } = require('./');
const client = require('./client');

// drop tables in the correct order
async function dropTables() {
  console.log('Dropping All Tables...');
  // drop all tables, in the correct order
  try {
    await client.query(`
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS articles;
  `)
  } catch (error) {
    throw error;
  }
}

// create tables in the correct order
async function createTables() {
  try {
    console.log("Starting to build tables...");
    // create all tables, in the correct order
    // create users table
    await client.query(`
      CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL
      );
    `)

    // create articles table
    await client.query(`
    CREATE TABLE articles(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      content TEXT,
      author_id INTEGER NOT NULL,
      created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      editor_id INTEGER,
      updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  
    CREATE OR REPLACE FUNCTION update_articles_updated_date_column()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_date = CURRENT_TIMESTAMP;
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  
    CREATE TRIGGER update_articles_updated_date_trigger
    BEFORE UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION update_articles_updated_date_column();
  `);
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

// create initial users
async function createInitialUsers() {
  console.log('Starting to create users...');
  try {

    const usersToCreate = [
      { username: 'albert', password: 'bertie99' },
      { username: 'sandra', password: 'sandra123' },
      { username: 'glamgal', password: 'glamgal123' },
    ]
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log('Users created:');
    console.log(users);
    console.log('Finished creating users!');
  } catch (error) {
    console.error('Error creating users!');
    throw error;
  }
}

// create initial articles
async function createInitialArticles() {
  try {
    console.log('Starting to create articles...');

    // create articles
    const articlesToCreate = [
      {
        title: 'How to make a great first impression',
        description: 'You only get one chance to make a first impression. Here are some tips to make sure you make the best first impression possible.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author_id: 1,
        keywords: ['first impression', 'impressing people', 'making a good first impression']
      },
      {
        title: 'Saving Money on Groceries',
        description: 'Groceries can be expensive. Here are some tips to help you save money on groceries.',
        content: 'At imperdiet dui accumsan sit amet nulla facilisi. Dignissim suspendisse in est ante in nibh mauris cursus. In iaculis nunc sed augue lacus viverra vitae congue eu. Netus et malesuada fames ac. Enim nulla aliquet porttitor lacus. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Nibh praesent tristique magna sit amet purus. Rhoncus aenean vel elit scelerisque. Id volutpat lacus laoreet non curabitur gravida arcu. Convallis aenean et tortor at risus viverra adipiscing at in. Bibendum arcu vitae elementum curabitur vitae nunc sed. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. At risus viverra adipiscing at in tellus integer feugiat. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Proin sed libero enim sed faucibus turpis in. In pellentesque massa placerat duis ultricies lacus sed turpis. Dolor purus non enim praesent elementum. Eu facilisis sed odio morbi quis commodo odio aenean.',
        author_id: 1,
        keywords: ['saving money', 'groceries', 'saving money on groceries']
      },
      {
        title: 'Making your Home More Eco-Friendly',
        description: 'There are many ways to make your home more eco-friendly. Here are some tips to help you get started.',
        content: 'Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Dolor purus non enim praesent elementum. Arcu risus quis varius quam quisque id diam. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Vitae congue eu consequat ac felis donec. Ullamcorper malesuada proin libero nunc. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Et malesuada fames ac turpis egestas sed tempus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Viverra vitae congue eu consequat. In massa tempor nec feugiat nisl pretium fusce id velit.',
        author_id: 1,
        keywords: ['eco-friendly', 'green living', 'making your home more eco-friendly']
      },
    ];
    const articles = await Promise.all(articlesToCreate.map(createSeedArticle));
    console.log('Articles created!');
    console.log('Finished creating articles!');
  } catch (error) {
    console.error('Error creating articles!');
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialArticles();

  } catch (error) {
    console.log('Error during rebuildDB')
    throw error;
  }
}

module.exports = {
  rebuildDB
};
