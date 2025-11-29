import Header from '../Header';

export default function HeaderExample() {
  return <Header onTelegramClick={() => console.log('Telegram clicked')} />;
}
