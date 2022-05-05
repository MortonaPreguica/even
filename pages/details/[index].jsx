import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
const Details = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});

  const router = useRouter();
  const { index } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    if(data.nomeFantasia == '') return
    setCompanies(companies[index] = {
      nomeFantasia: data.nomeFantasia,
      cnpj: data.cnpj,
      valorFaturamentoMensal: data.valorFaturamentoMensal,
      dataInicio: data.dataInicio,
    });
    console.log(companies)
    localStorage.setItem('companies', JSON.stringify(companies))
    router.push('/')
  }

  useEffect(() => {
    // Array com os objetos
    const savedCompanies = JSON.parse(localStorage.getItem('companies'));

    setCompanies(savedCompanies);
    setSelectedCompany(savedCompanies[index]);
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center md:px-20 '>
      <Head>
        <title>EvenCard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h2 className="text-4xl tracking-tight font-extrabold text-purple-900 sm:text-5xl md:text-6xl mb-4 md:mb-8">Edit a company 🏙</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' flex w-full flex-col itens-center bg-purple-100 px-2  py-5 rounded-lg shadow-md'
      >
        
        <label
          htmlFor='nomeFantasia'
          className='mb-2 block text-sm font-medium text-gray-700'
        >
          Company Name
        </label>
        <input
          type='text'
          {...register('nomeFantasia')}
          defaultValue={selectedCompany?.nomeFantasia || ''}
          className='mb-4 block w-full rounded-md border-gray-300 py-2 px-3 focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
          placeholder='Company Name'
        />
        <label
          htmlFor='cnpj'
          className='mb-2 block text-sm font-medium text-gray-700'
        >
          Cnpj
        </label>
        <input
          type='text'
          {...register('cnpj', { required: true })}
          defaultValue={selectedCompany?.cnpj || ''}
          className='mb-4  block w-full rounded-md border-gray-300 py-2 px-3 focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
          placeholder='CNPJ'
        />
        <label
          htmlFor='faturamentoMensal'
          className='mb-2 block text-sm font-medium text-gray-700'
        >
          Faturamento
        </label>
        <input
          type='number'
          {...register('valorFaturamentoMensal', { required: true })}
          defaultValue={selectedCompany?.valorFaturamentoMensal || ''}
          className='mb-3 block w-full rounded-md border-gray-300 py-2 px-3 focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
          placeholder='Faturamento mensal'
        />
        <label
          htmlFor='dataInicio'
          className='mb-2 block text-sm font-medium text-gray-700'
        >
          Data de Inicio
        </label>
        <input
          type='text'
          {...register('dataInicio', { required: true })}
          defaultValue={selectedCompany?.dataInicio || ''}
          className='mb-4  block w-full rounded-md border-gray-300 py-2 px-3  focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
          placeholder='Data de Inicio'
        />
        <div className=''>
          <input
            type='submit'
            className=' mx-auto block cursor-pointer rounded-md border-none bg-blue-500 py-3 px-4 text-base text-white outline-none transition hover:bg-blue-300 shadow-md'
          />
        </div>
      </form>
    </div>
  );
};

export default Details;
