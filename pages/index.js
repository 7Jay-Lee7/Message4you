import { useEffect, useState } from 'react';
import { getRandomMessage } from '../Messages/messages';

export default function Home() {
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    setDisplayedMessage(getRandomMessage());
  }, []);

  return (
    <div>
    <div className="flex justify-center items-center h-screen bg-rose-600">
      <div className="text-center">
        <div className="font-extrabold w-96 whitespace-normal">{displayedMessage}</div>
        <button className="mt-4" onClick={() => setDisplayedMessage(getRandomMessage())}>Push me</button>
      </div>
    </div>
    <div className="hearts" aria-hidden="true">
    <div className="heart">
      ❤️
    </div>
    <div className="heart">
      💛
    </div>
    <div className="heart">
      💜
    </div>
    <div className="heart">
      💗
    </div>
    <div className="heart">
      ❤️
    </div>
    <div className="heart">
      💜
    </div>
    <div className="heart">
      ❤️
    </div>
    <div className="heart">
      💗
    </div>
    <div className="heart">
      💛
    </div>
    <div className="heart">
      ❤️
    </div>
    <div className="heart">
      💗
    </div>
    <div className="heart">
      ❤️
    </div>
  </div>
</div>
  );
}
