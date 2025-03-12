const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// module.exports = mongoose.model('Feedback', FeedbackSchema);
const Feedback= mongoose.model('Feedback', FeedbackSchema);
export default Feedback;
