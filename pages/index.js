import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import {
  ChevronUpIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
} from '@heroicons/react/solid';

const Home = () => {
  const [companies, setCompanies] = useState();
  const [open, setOpen] = useState(false);
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [valorFaturamentoMensal, setValorFaturamentoMensal] = useState('');
  const [dataInicio, setDataInicio] = useState('');

  // get itens from localStorage
  useEffect(() => {
    const savedCompanies = JSON.parse(localStorage.getItem('companies'));

    setCompanies(savedCompanies !== null ? savedCompanies : []);
  }, []);

  //update everytime company is modified
  useEffect(() => {
    if (!companies) {
      return;
    }
    localStorage.setItem('companies', JSON.stringify(companies));
  }, [companies]);

  const onSubmit = () => {
    if (nomeFantasia == '' || cnpj == '' || valorFaturamentoMensal == '' || dataInicio == '') return
    const newCompany = {
      nomeFantasia: nomeFantasia,
      cnpj: cnpj,
      valorFaturamentoMensal: valorFaturamentoMensal,
      dataInicio: dataInicio,
    };
    const newCompanies = [...companies, newCompany];
    setCompanies(newCompanies);
    setOpen(!open);

    setNomeFantasia('')
    setCnpj("")
    setValorFaturamentoMensal('')
    setDataInicio('')
  };

  const removeCompany = (company) => {
    let copyCompanies = [...companies];
    copyCompanies.splice(copyCompanies.indexOf(company), 1);
    setCompanies(copyCompanies);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center md:py-2'>
      <Head>
        <title>EvenCard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full max-w-5xl flex-1 flex-col  items-center justify-center px-2 md:px-20 text-center'>
        <h2 className="text-4xl tracking-tight font-extrabold text-purple-900 sm:text-5xl md:text-6xl mb-4 md:mb-8">EvenCard 💳</h2>
        {companies?.map((company, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <div className='focus-visible:ring-opacity-75" mb-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500'>
                  <span>{company.nomeFantasia}</span>
                  <div className='ml-2 flex w-20 justify-evenly focus:outline-none focus-visible:ring focus-visible:ring-purple-500 '>
                    <TrashIcon
                      onClick={() => removeCompany(company)}
                      className='h-5 w-5 hover:cursor-pointer hover:text-red-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500'
                    ></TrashIcon>
                    <Link href={`/details/${index}`}>
                      <a>
                        <PencilIcon className='h-5 w-5 hover:cursor-pointer hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500'></PencilIcon>
                      </a>
                    </Link>
                    <Disclosure.Button>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                  </div>
                </div>
                <Transition
                as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >

                <Disclosure.Panel className='flex flex-col w-full space-y-2 px-4 pt-2 pb-2 mb-2 text-sm text-gray-500 '>
                  <span>CNPJ: {company.cnpj}</span>
                  <span>Faturamento: {company.valorFaturamentoMensal}</span>
                  <span>Data de Início: {company.dataInicio}</span>
                </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))
        } 

        {open ? (
          <form
            onSubmit={onSubmit}
            className='itens-center flex w-full flex-col bg-purple-100 px-2  py-5 rounded-lg shadow-md'
          >
            <h2 className="pb-3 text-purple-800 text-2xl font-semibold">Add a new company</h2>
            <label
              htmlFor='nomeFantasia'
              className='mb-2 block text-sm font-medium text-gray-700'
            >
              Company Name
            </label>
            <input
              type='text'
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
              className='mb-3 block w-full rounded-md border-gray-300 py-2 px-3 focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
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
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              className='mb-3 block w-full rounded-md border-gray-300 py-2 px-3 focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
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
              value={valorFaturamentoMensal}
              onChange={(e) => setValorFaturamentoMensal(e.target.value)}
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
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className='mb-3 block w-full rounded-md border-gray-300 py-2 px-3  focus:border-purple-500 focus:ring-indigo-500 sm:text-base'
              placeholder='Data de Início'
            />
            <div className='flex mt-2'>
              <input
                type='submit'
                className=' mx-auto block cursor-pointer rounded-md border-none bg-blue-500 py-3 px-4 text-base text-white outline-none transition hover:bg-blue-300 '
              />
              <button
              onClick={() => setOpen(!open)}
                className=' mx-auto block cursor-pointer rounded-md border-none bg-red-500 py-3 px-4 text-base text-white outline-none transition hover:bg-red-300 '
              >Cancel</button>
            </div>
          </form>
        ) : (
          <PlusIcon
            onClick={() => setOpen(!open)}
            className='h-8 w-8 cursor-pointer rounded-full bg-purple-100 text-purple-500'
          />
        )}
      </main>
    </div>
  );
};

export default Home;
