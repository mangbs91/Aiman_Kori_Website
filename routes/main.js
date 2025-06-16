const express = require('express');
const router = express.Router();  // yang ni masuk ke app.js
const pool = require('../config/db');
const axios = require('axios');

// Home page
router.get('/', (req, res) => {
  res.render('index');
});

// About page
router.get('/about', (req, res) => {
  res.render('about');
});



// cctv image kuala selangor
router.get('/cctv/kuala-selangor', (req, res) => {
  const cctvImages = [
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//25.jpg?1747987843191',
      name: 'SUNGAI BULOH, KUALA SELANGOR'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//234.jpg?1747988303614',
      name: 'KUALA SELANGOR TOWN'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//246.jpg?1747988303616',
      name: 'SG SELANGOR, JAMBATAN ASSAM JAWA'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1265.jpg?1747988303622',
      name: 'RP SG SERDANG'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1267.jpg?1747988303625',
      name: 'RP SG JERAM'
    }
  ];

  res.render('cctv', { district: 'Kuala Selangor', cctvImages });
  console.log("image respond");
});


// cctv image sepang
router.get('/cctv/SEPANG', (req, res) => {
  const cctvImages = [
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//7.jpg?1748005972118',
      name: 'PEKAN DENGKIL, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//8.jpg?1748005972102',
      name: 'KG. SALAK TINGGI, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//236.jpg?1748005972196',
      name: 'PULAU MERANTI, SG. RASAU'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1256.jpg?1748005972170',
      name: 'RP SG JENDERAM'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1257.jpg?1748005972166',
      name: 'KG GHINCHING'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1260.jpg?1748005972186',
      name: 'RP PARIT C LABU'
    }
  ];

  res.render('cctv', { district: 'SEPANG', cctvImages });
  console.log("image respond");
});


// cctv image sabak bernam
router.get('/cctv/SABAK-BERNAM', (req, res) => {
  const cctvImages = [
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1262.jpg?1748009616846',
      name: 'RP SG BESAR'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1263.jpg?1748009616848',
      name: 'PEKAN SEKINCHAN'
    }

    // Add more as needed
  ];

  res.render('cctv', { district: 'SABAK-BERNAM', cctvImages });
  console.log("Image response sent for SABAK-BERNAM");
});


// cctv image HULU LANGAT
router.get('/cctv/HULU-LANGAT', (req, res) => {
  const cctvImages = [
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//4.jpg?1748009726382',
      name: 'BT 15, IKBN'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//5.jpg?1748009726376',
      name: 'DATARAN KAJANG, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//6.jpg?1748009726480',
      name: 'PLAZA METRO KAJANG, SG. JELOK'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//19.jpg?1748009726483',
      name: 'BT12 SG SERAI, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//23.jpg?1748009726488',
      name: 'PASAR KAJANG, SG. JELOK'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//31.jpg?1748009786417',
      name: 'KG BARU BALAKONG, SG. BALAK'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//32.jpg?1748009786455',
      name: 'KG SG RINCHING, SG. SEMENYIH'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//33.jpg?1748009786444',
      name: 'SRI TANJUNG, SG. SEMENYIH'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//37.jpg?1748009786421',
      name: 'PEKAN KAJANG, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1255.jpg?1748009786451',
      name: 'BATU 9 HULU LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1272.jpg?1748009786494',
      name: 'TAMAN PASIR MAS'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1273.jpg?1748009786489',
      name: 'PEKAN BANGI LAMA'
    }
  ];

  res.render('cctv', { district: 'HULU-LANGAT', cctvImages });
  console.log("Image response sent for HULU-LANGAT");
});


// cctv image KUALA LANGAT
router.get('/cctv/KUALA-LANGAT', (req, res) => {
  const cctvImages = [
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//9.jpg?1748010141652',
      name: 'BUKIT CHANGGANG, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//24.jpg?1748010141649',
      name: 'PEKAN BANTING, SG. LANGAT'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1264.jpg?1748010141654',
      name: 'PINTU AIR SUNGAI BANTING'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1266.jpg?1748010141646',
      name: 'SUNGAI LANGAT SUNGAI LABU'
    },
    {
      url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1268.jpg?1748010141651',
      name: 'PINTU AIR BATU 9'
    },
  ];

  res.render('cctv', { district: 'KUALA-LANGAT', cctvImages });
  console.log("Image response sent for KUALA-LANGAT");
});

// cctv image KLANG
router.get('/cctv/KLANG', (req, res) => {
  const cctvImages = [
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//17.jpg?1748010220004', name: 'SG. KAPAR' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//18.jpg?1748010220002', name: 'PEKAN KAPAR' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//20.jpg?1748010220012', name: 'KG. JAWA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//38.jpg?1748010220022', name: 'RP SG. UDANG' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//233.jpg?1748010220019', name: 'SG. UDANG' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//239.jpg?1748010220015', name: 'RP SG. UDANG 2' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//240.jpg?1748010220024', name: 'RP SG. KAPAR' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//241.jpg?1748010220028', name: 'KG. TENGKU HUSIN' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//242.jpg?1748010220036', name: 'RP SG. JATI' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//244.jpg?1748010220038', name: 'RP KG. JAWA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//247.jpg?1748010220040', name: 'RP SG. KLANG KG. DELEK' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1249.jpg?1748010220189', name: 'RP SG. JATI KG. RANTAU PANJANG' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1250.jpg?1748010220160', name: 'RP SG. KAPAR TAMAN SRI' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1253.jpg?1748010220060', name: 'RP SG. KLANG PULAU INDAH' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1254.jpg?1748010220065', name: 'RP SG. UDANG TAMAN RAKYAT' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1261.jpg?1748010220212', name: 'RP SG. KAPAR TAMAN SERI' },
  ];

  res.render('cctv', { district: 'KLANG', cctvImages });
  console.log("Image response sent for KLANG");
});


// cctv image PETALING
router.get('/cctv/PETALING', (req, res) => {
  const cctvImages = [
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//10.jpg?1748010459648', name: 'RP JALAN PUCHONG' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//11.jpg?1748010459662', name: 'RP PINGGIRAN PUTRA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//12.jpg?1748010459653', name: 'RP PUCHONG PERMAI' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//13.jpg?1748010459671', name: 'RP KG SRI AMAN' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//14.jpg?1748010459666', name: 'RP PUTRA PERDANA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//15.jpg?1748010459669', name: 'RP KG MELAYU PUCHONG' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//16.jpg?1748010459677', name: 'RP BUKIT PUCHONG' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//21.jpg?1748010459674', name: 'RP PUJ 7' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//28.jpg?1748010459679', name: 'RP BANDAR PUTERI' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//29.jpg?1748010459688', name: 'RP PUCHONG INDAH' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//30.jpg?1748010459695', name: 'RP KG SRI LANGKAT' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//235.jpg?1748010459692', name: 'RP JALAN KEBUN' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//245.jpg?1748010459700', name: 'RP KG BUKIT LANJAN' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1269.jpg?1748010459698', name: 'RP KG BUKIT CHERAKAH' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1271.jpg?1748010459709', name: 'RP BANDAR KINRARA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1275.jpg?1748010459718', name: 'RP BANDAR PUTERI 2' }
  ];

  res.render('cctv', { district: 'PETALING', cctvImages });
  console.log("Image response sent for PETALING");
});


// cctv image HULU-SELANGOR
router.get('/cctv/HULU-SELANGOR', (req, res) => {
  const cctvImages = [
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1.jpg?1748010711499', name: 'RP BATANG KALI' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//26.jpg?1748010711500', name: 'RP RASA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//27.jpg?1748010711496', name: 'RP SERENDAH' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//34.jpg?1748010711497', name: 'RP KG GUMUK' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//35.jpg?1748010711497', name: 'RP KG TIMAH' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//36.jpg?1748010711493', name: 'RP KG SUNGAI CHOH' }
  ];

  res.render('cctv', { district: 'HULU-SELANGOR', cctvImages });
  console.log("Image response sent for HULU-SELANGOR");
});


// cctv image GOMBAK
router.get('/cctv/GOMBAK', (req, res) => {
  const cctvImages = [
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//2.jpg?1748010817939', name: 'RP BATU 12 GOMBAK' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//3.jpg?1748010817954', name: 'RP KG SUNGAI TUA' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//22.jpg?1748010817943', name: 'RP SG RUMPUT' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//230.jpg?1748010817946', name: 'RP KG SG SALAK' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//231.jpg?1748010817948', name: 'RP KG SG PUSU' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//232.jpg?1748010877970', name: 'RP SG CHONGKAK' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1258.jpg?1748010877994', name: 'RP GENTING SEMPAH' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1259.jpg?1748010877998', name: 'RP UIA GOMBAK' },
    { url: 'https://infobanjirjps.selangor.gov.my/InfoBanjir.WebAdmin/CCTV_Image//1274.jpg?1748010878011', name: 'RP SG GASI' }
  ];

  res.render('cctv', { district: 'GOMBAK', cctvImages });
  console.log("Image response sent for GOMBAK");
});

//get image page
router.get('/image', (req, res) => {
  res.render('image');
});

// skills page
router.get('/skills', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY id DESC');
    const skills = result.rows;

    res.render('skills', { skills });  // ✅ Pass projects to the template
  } catch (err) {
    console.error(err);
    res.send('Error loading projeccts');
  }
})

// Projects page
router.get('/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id DESC');
    const projects = result.rows;

    res.render('projects', { projects });  // ✅ Pass projects to the template
  } catch (err) {
    console.error(err);
    res.send('Error loading projeccts');
  }
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact');
});

// add-project page
router.get('/add-project', (req, res) => {
  res.render('add-project');
});

// GET form add skill
router.get('/add-skill', (req, res) => {
  res.render('add-skill');
});

// add project into data base
router.post('/add-project', async (req, res) => {
  const { title, description, tech_stack, link } = req.body;
  await pool.query(
    'INSERT INTO projects (title, description, tech_stack, link) VALUES ($1, $2, $3, $4)',
    [title, description, tech_stack, link]
  );
  res.redirect('/dashboard');
  console.log("succes add project");
});


// add skill into data base
router.post('/add-skill', async (req, res) => {
  const { name, level } = req.body;
  try {
    await pool.query(
      'INSERT INTO skills (name, level) VALUES ($1, $2)',
      [name, level || null]
    );
    res.redirect('/add-skill');
    console.log("succes add skill")
  } catch (err) {
    console.error(err);
    res.send('Error adding skill');
  }
});

// dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const projectResult = await pool.query('SELECT * FROM projects ORDER BY id DESC');
    const skillResult = await pool.query('SELECT * FROM skills ORDER BY id DESC');

    const projects = projectResult.rows;
    const skills = skillResult.rows;

    res.render('dashboard', { projects, skills });  // ✅ Pass both to template
  } catch (err) {
    console.error(err);
    res.send('Error loading dashboard');
  }
});

// edit project page
router.get('/edit-project/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [req.params.id]);
    const project = result.rows[0];

    if (!project) {
      return res.status(404).send('Project not found');
    }

    res.render('edit-project', { project });  // ✅ Right here
  } catch (err) {
    console.error(err);
    res.send('Error loading project');
  }
});

// edit skill page
router.get('/edit-skill/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM skills WHERE id = $1', [id]);
    const skill = result.rows[0];

    if (!skill) {
      return res.status(404).send('Skill not found');
    }

    res.render('edit-skill', { skill });
  } catch (err) {
    console.error(err);
    res.send('Error loading skill for editing');
  }
});


// edit project into data base
router.post('/edit-project/:id', async (req, res) => {
 const { title, description, tech_stack, link } = req.body;
  const projectId = req.params.id;

  await pool.query(
  'UPDATE projects SET title = $1, description = $2, tech_stack = $3, link = $4 WHERE id = $5',
  [title, description, tech_stack, link, projectId]
);

res.redirect('/dashboard');
console.log("succes edit project")
});

// edit skill into data base
router.post('/edit-skill/:id', async (req, res) => {
  const { id } = req.params;
  const { name, level } = req.body;

  try {
    await pool.query(
      'UPDATE skills SET name = $1, level = $2 WHERE id = $3',
      [name, level || null, id]
    );
    res.redirect('/dashboard');
    console.log("succes edit skill")
  } catch (err) {
    console.error(err);
    res.send('Error updating skill');
  }
});

// delete project
router.post('/delete-project/:id', async (req, res) => {
  await pool.query('DELETE FROM projects WHERE id = $1', [req.params.id]);
  console.log("Success Delete");
  res.redirect('/dashboard');
});


// delete skill
router.post('/delete-skill/:id', async (req,res) => {

  await pool.query('DELETE FROM skills WHERE id = $1', [req.params.id]);
  res.redirect('/dashboard');
  console.log("Succes Delete");
  
});

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.redirect('/');
    }
    res.clearCookie('connect.sid'); // optional, clears cookie
    res.redirect('/');
    console.log("succes logout")
  });
});

// respond contact from index.js 
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    res.send(`
      <html>
        <head>
          <meta http-equiv="refresh" content="5; url=/" />
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              margin-top: 100px;
            }
          </style>
        </head>
        <body>
          <h2>Thank you for contacting!</h2>
          <p>You will be redirected to the homepage in 5 seconds.</p>
        </body>
      </html>
    `);
    console.log("succes sent contact to data base")
  } catch (err) {
    console.error('Error saving contact form:', err);
    res.status(500).send('There was an error. Please try again later.');
  }
});

// weather page / weather API

router.get('/weather', async (req, res) => {
  try {
    const apiKey = '18905f13ab68fd1fc421fad87ec3d06c';
    const city = req.query.city || 'Shah Alam'; // Default to Shah Alam
    const units = 'metric';

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: apiKey,
        units: units,
      },
    });

    const weatherData = response.data;
    res.render('weather', { weather: weatherData, error: null });
  } catch (error) {
    res.render('weather', { weather: null, error: 'City not found. Try again.' });
  }
});

// Show inventory


router.get('/inventory', async (req, res) => {
  const result = await pool.query('SELECT * FROM inventory ORDER BY id DESC');
  res.render('inventory', { items: result.rows });
});

// Add item
router.post('/inventory/add', async (req, res) => {
  const { name, quantity, price } = req.body;
  await pool.query('INSERT INTO inventory (name, quantity, price) VALUES ($1, $2, $3)', [name, quantity, price]);
  res.redirect('/inventory');
});

// Delete item
router.post('/inventory/delete/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM inventory WHERE id = $1', [id]);
  res.redirect('/inventory');
});

// Update item
router.post('/inventory/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  await pool.query('UPDATE inventory SET name=$1, quantity=$2, price=$3 WHERE id=$4', [name, quantity, price, id]);
  res.redirect('/inventory');
});

module.exports = router;





