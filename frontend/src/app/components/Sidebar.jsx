// // components/Sidebar.js
// "use client"
// import { useState } from 'react';
// import Link from 'next/link';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-purple-800 h-screen w-64">
//       <div className="p-4">
//         <h1 className="text-white text-xl font-semibold">Sidebar</h1>
//       </div>
//       <nav className="mt-6">
//         <div>
//           <Link href="/" legacyBehavior>
//             <a className="block py-2 px-4 text-white hover:bg-gray-700">Dashboard</a>
//           </Link>
//         </div>
//         <div className="mt-1">
//           <button
//             className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <span>Dropdown</span>
//             <svg
//               className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
//               />
//             </svg>
//           </button>
//           {isOpen && (
//             <div className="pl-4">
//               <Link href="/practice" legacyBehavior>
//                 <a className="block py-2 px-4 text-white hover:bg-gray-700">Page 1</a>
//               </Link>
//               <Link href="/dashboard" legacyBehavior>
//                 <a className="block py-2 px-4 text-white hover:bg-gray-700">Page 2</a>
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import Image from "next/image"
// import Name from '../../../public/White_Diamond.png'
// import { useState } from 'react';
// import Link from 'next/link';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isNestedOpen, setIsNestedOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleNestedDropdown = () => {
//     setIsNestedOpen(!isNestedOpen);
//   };

//   return (
//     <div className="bg-purple-800 h-screen w-64">
//       <div className="p-4">
      
//         <h1 className="text-white text-xl font-semibold flex justify-center">
//         <Image 
//      src={Name}
//        width={35}
//        />&nbsp; <b>Industry</b></h1>
       
//       </div>
//       <nav className="mt-6 ">
//         <div>
//           <Link href="/usecase1" className="block py-2 px-4 text-white hover:bg-gray-600 ">
//             Use Case 1
//           </Link>
//         </div>
//         <div>
//           <Link href="/usecase2" className="block py-2 px-4 text-white hover:bg-gray-600">
//             Use Case 2
//           </Link>
//         </div>
//         <div>
//           <Link href="/usecase3" className="block py-2 px-4 text-white hover:bg-gray-700">
//             Use Case 3
//           </Link>
//         </div>
//         <div className="mt-1">
//           <button
//             className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <span>Use Case 4</span>
//             <svg
//               className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
//               />
//             </svg>
//           </button>
//           {isOpen && (
//             <div className="pl-4">
//               {/* <Link href="/practice" legacyBehavior>
//                 <a className="block py-2 px-4 text-white hover:bg-gray-700">Page 1</a>
//               </Link> */}
//               {/* <Link href="/dashboard" legacyBehavior>
//                 <a className="block py-2 px-4 text-white hover:bg-gray-700">Page 2</a>
//               </Link> */}
//               <div className="mt-1">
//                 <button
//                   className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//                   onClick={toggleNestedDropdown}
//                 >
//                   <span>BSF 1</span>
//                   <svg
//                     className={`w-4 h-4 ${isNestedOpen ? 'transform rotate-180' : ''}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d={isNestedOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
//                     />
//                   </svg>
//                 </button>
//                 {isNestedOpen && (
//                   <div className="pl-4">
//                     <Link href="/" legacyBehavior>
//                       <a className="block py-2 px-4 text-white hover:bg-gray-700">BCF Board 1</a>
//                     </Link>
//                     {/* <Link href="/nested-page2" legacyBehavior>
//                       <a className="block py-2 px-4 text-white hover:bg-gray-700">Nested Page 2</a>
//                     </Link> */}
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// working code ;
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Name from "../../../public/White_Diamond.png";
// import { usePathname } from "next/navigation"; // Correct import

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isNestedOpen, setIsNestedOpen] = useState(false);
//   const pathname = usePathname(); // Use usePathname hook instead

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleNestedDropdown = () => {
//     setIsNestedOpen(!isNestedOpen);
//   };

//   const isActive = (path) => pathname === path ? "bg-gray-700" : "";

//   return (
//     <div className="bg-purple-800 h-screen w-64">
//       <div className="p-4">
//         <h1 className="text-white text-xl font-semibold flex justify-center">
//           <Image src={Name} width={35} alt="Logo" />
//           &nbsp; <b>Industry</b>
//         </h1>
//       </div>
//       <nav className="mt-6">
//         <div>
//           <Link href="/usecase1" className={`block py-2 px-4 text-white hover:bg-gray-600 ${isActive("/usecase1")}`}>
//             Use Case 1
//           </Link>
//         </div>
//         <div>
//           <Link href="/usecase2" className={`block py-2 px-4 text-white hover:bg-gray-600 ${isActive("/usecase2")}`}>
//             Use Case 2
//           </Link>
//         </div>
//         <div>
//           <Link href="/usecase3" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/usecase3")}`}>
//             Use Case 3
//           </Link>
//         </div>
//         <div>
//           <Link href="/usecase5" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/usecase5")}`}>
//             <div className="flex justify-between items-center">
//               <span>Use Case 5</span>
//               <Link href="/menus">
//                 <button className="bg-gray-600 hover:bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none">
//                   +
//                 </button>
//               </Link>
//             </div>
//           </Link>
//         </div>
//         <div className="mt-1">
//           <button
//             className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <span>Use Case 4</span>
//             <svg
//               className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 15l7-7 7 7"
//               />
//             </svg>
//           </button>
//           {isOpen && (
//             <div className="pl-4">
//               <div className="mt-1">
//                 <button
//                   className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//                   onClick={toggleNestedDropdown}
//                 >
//                   <span>BSF 1</span>
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-200 ${isNestedOpen ? "transform rotate-180" : ""}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     />
//                   </svg>
//                 </button>
//                 {isNestedOpen && (
//                   <div className="pl-4">
//                     <Link href="/" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/")}`}>
//                       BCF Board 1
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
//working code end;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import Name from "../../../public/White_Diamond.png";
import { usePathname, useRouter } from "next/navigation"; // Correct import


const Sidebar = () => {
  const [menu_name, setMenu_name] = useState()

  const [next, setNext] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname hook instead
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:2020/endpoint/get-menus")
      .then((result) => setNext(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.post('http://localhost:2020/endpoint/add-menu', {menu_name})
    .then(result => {console.log(result)
      document.getElementById('my_modal_1').close();
        router.push('/')

})
    .catch(err => console.log(err))

}
  const toggleNestedDropdown = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  const isActive = (path) => pathname === path ? "bg-gray-700" : "";

  const handlePlusClick = (e) => {
    e.stopPropagation();
    router.push("/menus");
  };

  return (
    <div className="bg-purple-800 h-screen w-64">
      <div className="p-4">
        <h1 className="text-white text-xl font-semibold flex justify-center">
          <Image src={Name} width={35} alt="Logo" />
          &nbsp; <b>Industry</b>
        </h1>
      </div>
      <nav className="mt-6">
        <div>
          <Link href="/usecase1" className={`block py-2 px-4 text-white hover:bg-gray-600 ${isActive("/usecase1")}`}>
            Use Case 1
          </Link>
          
        </div>
        <div >
      <div className="mt-1">
        <div className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none">
          <button className="flex-grow text-left" onClick={toggleNestedDropdown}>
            <span>Use Case 2</span>
          </button>
          <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1').showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7H5"
              />
            </svg>
          </button>
        </div>
        {isNestedOpen && (
          <div className="pl-4">
            {/* <Link href="/" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/")}`}>
              BCF Board 1
            </Link> */}
            <div>
{next.map((item) => (
  <div key={item._id}>
    <Link href="/menus" className={`block py-2 px-4 text-white hover:bg-gray-600 `}>
    {item.menu_name}
  </Link>
    </div>
       ))}
</div>
          </div>


          
        )}
      </div>
    </div>
        {/* <div>
          <Link href="/usecase2" className={`block py-2 px-4 text-white hover:bg-gray-600 ${isActive("/usecase2")}`}>
            Use Case 2
          </Link>
        </div> */}
        {/* <div>
          <Link href="/usecase3" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/usecase3")}`}>
            Use Case 3
          </Link>
        </div> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Menu</h3>
        <div className="modal-action flex justify-center">
          <form onSubmit={handleSubmit}>
            {/* Input field */}
            <input
              type="text"
              placeholder="New menu"
              className="input input-bordered input-info w-full max-w-xs"
             
              onChange={(e) => setMenu_name(e.target.value)}
            />
            {/* Buttons on separate lines */}
            <div className="mt-2 flex justify-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              &nbsp;
              <button type="button" className="btn btn-error" onClick={() => document.getElementById('my_modal_1').close()}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>

      
        {/* <div className="mt-1">
          <button
            className="flex justify-between w-full py-2 px-4 text-white "
            onClick={toggleDropdown}
          >
            <span>Use Case 4</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="pl-4">
              <div className="mt-1">
                <button
                  className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none" 
                  onClick={toggleNestedDropdown}
                >
                  <span>BSF 1</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isNestedOpen ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
                {isNestedOpen && (
                  <div className="pl-4">
                    <Link href="/" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/")}`}>
                      BCF Board 1
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div> */}
        {/* <div className="mt-1">
  <button
    className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
    onClick={toggleDropdown}
  >
    <span>Use Case 4</span>
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-45" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5v14m7-7H5"
      />
    </svg>
  </button>
  {isOpen && (
    <div className="pl-4">
      <div className="mt-1">
        <button
          className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
          onClick={toggleNestedDropdown}
        >
          <span>BSF 1</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isNestedOpen ? "transform rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <button
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14m7-7H5"
               className="btn"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >+</button>
          </svg>
        </button>
        {isNestedOpen && (
          <div className="pl-4">
            <Link href="/" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/")}`}>
              BCF Board 1
            </Link>
          </div>
        )}
      </div>
    </div>
  )}
</div> */}
{/* kkkdkd */}
<div className="mt-1">
  <div className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none">
    <button className="flex-grow text-left" onClick={toggleDropdown}>
      <span>Use Case 3</span>
    </button>
    <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1').showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v14m7-7H5"
        />
      </svg>
    </button>
  </div>
  {isOpen && (
    <div className="pl-4">
      <div className="mt-1">
        <div className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none">
          <button className="flex-grow text-left" onClick={toggleNestedDropdown}>
            <span>BSF 1</span>
          </button>
          <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1').showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7H5"
              />
            </svg>
          </button>
        </div>
        {isNestedOpen && (
          <div className="pl-4">
            <Link href="/" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/")}`}>
              BCF Board 1
            </Link>
            <div>
{next.map((item) => (
  <div key={item._id}>
    <Link href="/menus" className={`block py-2 px-4 text-white hover:bg-gray-600 `}>
    {item.menu_name}
  </Link>
    </div>
       ))}
</div>
          </div>


          
        )}
      </div>
    </div>
  )}
</div>

        <div>
          <Link href="/menusd" className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/usecase5")}`}>
            <div className="flex justify-between items-center">
              <span>Use Case 5</span>
              <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1').showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7H5"
              />
            </svg>
          </button>

              {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()} style={{ padding: '5px', fontSize: '15px', backgroundColor:"purple" }}>+</button> */}
              {/* <button
                className="bg-gray-600 hover:bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center focus:outline-none"
                onClick={handlePlusClick}
              >
                +
              </button> */}
            </div>
          </Link>
        </div>
        <div>
        {next.map((item) => (
          <div key={item._id}>
            <Link href="/menus" className={`block py-2 px-4 text-white hover:bg-gray-600 `}>
            {item.menu_name}
          </Link>
            </div>
               ))}
        </div>
       {/* <div>
      {next.map(card => (
        <div key={card.id}>
        
          <Link href="/practice" className={`block py-2 px-4 text-white hover:bg-gray-600 `}>
            {card.menu_name}
          </Link>
        </div>
      ))}
    </div> */}
 

      </nav>
    </div>
  );
};

export default Sidebar;

// "use client"
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Name from "../../../public/White_Diamond.png";
// import { usePathname } from "next/navigation";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isNestedOpen, setIsNestedOpen] = useState(false);
//   const [showForm, setShowForm] = useState(false); // State to show/hide form
//   const [newMenuItemName, setNewMenuItemName] = useState(""); // State for new menu item name
//   const [menuItems, setMenuItems] = useState(["/usecase1", "/usecase2", "/usecase3"]); // Initial menu items
//   const pathname = usePathname();

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleNestedDropdown = () => {
//     setIsNestedOpen(!isNestedOpen);
//   };

//   const isActive = (path) => (pathname === path ? "bg-gray-700" : "");

//   const handleAddMenuItem = () => {
//     setShowForm(true);
//   };

//   const handleSaveMenuItem = () => {
//     const newMenuItemLink = `/usecase${menuItems.length + 1}`;
//     setMenuItems([...menuItems, newMenuItemLink]);
//     setShowForm(false);
//     setNewMenuItemName("");
//   };

//   return (
//     <div className="bg-purple-800 h-screen w-64">
//       <div className="p-4">
//         <h1 className="text-white text-xl font-semibold flex justify-center">
//           <Image src={Name} width={35} alt="Logo" />
//           &nbsp; <b>Industry</b>
//         </h1>
//       </div>
//       <nav className="mt-6">
//         {menuItems.map((item, index) => (
//           <div key={index}>
//             <Link
//               href={item}
//               className={`block py-2 px-4 text-white hover:bg-gray-600 ${isActive(item)}`}
//             >
//               Use Case {index + 1}
//             </Link>
//           </div>
//         ))}
//         <div>
//           <button
//             className="ml-2 text-white hover:bg-gray-700 focus:outline-none"
//             onClick={handleAddMenuItem}
//           >
//             +
//           </button>
//         </div>
//         {showForm && (
//           <div className="p-4 mt-2 bg-gray-700 rounded">
//             <input
//               type="text"
//               placeholder="New Menu Item Name"
//               value={newMenuItemName}
//               onChange={(e) => setNewMenuItemName(e.target.value)}
//               className="p-2 w-full rounded"
//             />
//             <button
//               onClick={handleSaveMenuItem}
//               className="mt-2 p-2 bg-purple-600 text-white rounded w-full"
//             >
//               Save
//             </button>
//           </div>
//         )}
//         <div className="mt-1">
//           <button
//             className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <span>Use Case 4</span>
//             <svg
//               className={`w-4 h-4 transition-transform duration-200 ${
//                 isOpen ? "transform rotate-180" : ""
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
//             </svg>
//           </button>
//           {isOpen && (
//             <div className="pl-4">
//               <div className="mt-1">
//                 <button
//                   className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
//                   onClick={toggleNestedDropdown}
//                 >
//                   <span>BSF 1</span>
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-200 ${
//                       isNestedOpen ? "transform rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
//                   </svg>
//                 </button>
//                 {isNestedOpen && (
//                   <div className="pl-4">
//                     <Link
//                       href="/"
//                       className={`block py-2 px-4 text-white hover:bg-gray-700 ${isActive("/")}`}
//                     >
//                       BCF Board 1
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
