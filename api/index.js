// import express from 'express'

// import { validate } from '@telegram-apps/init-data-node';
// const app = express();

// const token = ''

// app.use((req, res, next) => {
//     const header = req.header('authorization');
//     if (header) {
//         try {
//             validate(header, token);
//             return next();
//         } catch (e) {

//         }
//     }
//     res.status(403).send('unathorized')
// }
// )

// app.listen(3000)



// const secretToken = '5768337691:AAH5YkoiEuPk8-FZa32hStHTqXiLPtAEhx8';
// const initData =
//     'query_id=AAHdF6IQAAAAAN0XohDhrOrc' +
//     '&user=%7B%22id%22%3A279058397%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22Kibenko%22%2C%22username%22%3A%22vdkfrost%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%7D' +
//     '&auth_date=1662771648' +
//     '&hash=c501b71e775f74ce10e377dea85a7ea24ecd640b223ea86dfe453e0eaed2e2b2';

// validate(initData, secretToken);

import express from 'express';
import { validate } from '@telegram-apps/init-data-node';

const app = express();
const token = '7201821525:AAH7loon08xcZTodc9tVUc1zH4zaZXd3fZA'; // Replace with your actual token
// const token = '7201821525:AAH7loon08xcZTodc9tVUc1zH4zaZXd3fZA'; // Replace with your actual token

// Middleware to validate authorization header
app.use((req, res, next) => {


    const header = req.header('authorization');
    if (header) {
        try {
            validate(header, token);
            return next();
        } catch (e) {
            console.error('Authorization validation failed:', e);
        }
    }
    res.status(403).send('2Unauthorized');
});

// Example API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Data fetched successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
