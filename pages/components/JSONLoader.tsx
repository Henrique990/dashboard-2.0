import { useEffect } from "react";
import axios from 'axios';

const JSONLoader = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/data'); // Corrigi a URL para '/data' em vez de '/data'
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error('Error loading JSON data:', error);
      }
    };

    fetchData();
  }, []); // Adicionei um array vazio como segundo argumento para useEffect

  return null; // Retorne null ou substitua por algum conteúdo JSX que desejar
};

export default JSONLoader;
