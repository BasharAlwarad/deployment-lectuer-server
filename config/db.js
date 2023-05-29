import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://beelwarad52:oeIxhRnSaal8SrYW@deployment-lectuer.tsmgriq.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected successfully to the database.');
  } catch (err) {
    console.error('Failed to connect to the database. Error:', err);
  }
};
