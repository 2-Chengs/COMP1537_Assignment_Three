const app = require('./app.js');
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
main().catch(err => console.log(err));

async function main() {
    // await mongoose.connect('mongodb://localhost:27017/test');
    await mongoose.connect('mongodb+srv://twoochengzz:kandisax@cluster0.a8jg6yt.mongodb.net/?retryWrites=true&w=majority')

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
