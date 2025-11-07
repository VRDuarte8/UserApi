import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao Banco de Dados');
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error.message);
    process.exit(1);
  }
};

export default connectDB;
