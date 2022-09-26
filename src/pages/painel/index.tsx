import type { NextPage } from 'next'
import Card from '../../components/Card'
import DefaultLayout from '../../layouts/Default'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-4 gap-4 place-items-center w-full px-24 pt-20'>
        <Card 
          text='Usuários'
          numberOf={200}
          todayPercents={12}
        />

        <Card 
          text='Minha Conta'
          numberOf={1}
          todayPercents={0}
        />

        <Card 
          text='Avisos'
          numberOf={3}
          todayPercents={33}
        />

        <Card 
          text='Destaques Semanais'
          numberOf={1}
          todayPercents={100}
        />

        <Card 
          text='Vinhetas'
          numberOf={0}
          todayPercents={0}
        />

        <Card 
          text='Redes Sociais'
          numberOf={4}
          todayPercents={0}
        />
      </div>
    </DefaultLayout>
  )
}

export default Home
