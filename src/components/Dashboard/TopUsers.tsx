'use client'
import React, { useState } from 'react';

// Define the type for a user
interface User {
  id: number;
  name: string;
  buy: number;
  imageUrl: string;
}

const TopUser: React.FC = () => {
  // Initial state with a list of users
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Harry', buy: 20, imageUrl: 'https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996' },
    { id: 2, name: 'Mike Andreson', buy: 15, imageUrl: 'https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996' },
    { id: 3, name: 'Satya Dev', buy: 8, imageUrl: 'https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996' },
    { id: 4, name: 'Satya Dev', buy: 8, imageUrl: 'https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996' },
    { id: 5, name: 'Satya Dev', buy: 8, imageUrl: 'https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996' },
  ]);

  return (
    <div className="max-w-sm relative overflow-x-auto shadow-md rounded-md text-sm">
      <div className="text-white bg-blue-500 text-xl font-semibold  shadow-lg dark:bg-blue-400 dark:hover:bg-blue-500 flex flex-1 p-4">
        <svg className="w-6 h-6 text-white inline-block mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
        </svg>
          <span>Top Customers</span>
      </div>
      <ul className="w-full  text-left text-gray-500 dark:text-gray-400">
        {users.map(user => (
          <li key={user.id} className="flex group items-center justify-between p-3.5  border-b bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-50 cursor-pointer dark:hover:bg-gray-600">
            <img 
              src={user.imageUrl} 
              className="w-10 h-10 aspect-square rounded-full transition-transform shadow-lg duration-200 ease-in-out transform group-hover:scale-105"
              alt={user.name} 
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100')}
            />
            <span className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{user.name}</span>
            <span className="px-8 py-4 font-semibold text-blue-500 dark:text-blue-400">{user.buy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUser;
