"use client";
import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import Name from "../../../public/White_Diamond.png";
import { usePathname, useRouter } from "next/navigation";

interface MenuItem {
  _id: string;
  menu_name: string;
}

const Sidebar: React.FC = () => {
  const [menuName, setMenuName] = useState<string>("");
  const [next, setNext] = useState<MenuItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNestedOpen, setIsNestedOpen] = useState<boolean>(false);
  const pathname = usePathname();
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:2020/endpoint/add-menu', { menu_name: menuName })
      .then(result => {
        console.log(result);
        document.getElementById('my_modal_1')?.close();
        router.push('/');
      })
      .catch(err => console.log(err));
  };

  const toggleNestedDropdown = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  const isActive = (path: string) => pathname === path ? "bg-gray-700" : "";

  const handlePlusClick = (e: MouseEvent<HTMLButtonElement>) => {
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
        <div>
          <div className="mt-1">
            <div className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none">
              <button className="flex-grow text-left" onClick={toggleNestedDropdown}>
                <span>Use Case 2</span>
              </button>
              <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1')?.showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                </svg>
              </button>
            </div>
            {isNestedOpen && (
              <div className="pl-4">
                <div>
                  {next.map((item) => (
                    <div key={item._id}>
                      <Link href="/menus" className={`block py-2 px-4 text-white hover:bg-gray-600`}>
                        {item.menu_name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Menu</h3>
            <div className="modal-action flex justify-center">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="New menu"
                  className="input input-bordered input-info w-full max-w-xs"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setMenuName(e.target.value)}
                />
                <div className="mt-2 flex justify-center">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-error" onClick={() => document.getElementById('my_modal_1')?.close()}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
        <div className="mt-1">
          <div className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none">
            <button className="flex-grow text-left" onClick={toggleDropdown}>
              <span>Use Case 3</span>
            </button>
            <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1')?.showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
              <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
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
                  <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1')?.showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
                    <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
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
                          <Link href="/menus" className={`block py-2 px-4 text-white hover:bg-gray-600`}>
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
              <button className="btn ml-2" onClick={() => document.getElementById('my_modal_1')?.showModal()} style={{ padding: '5px', fontSize: '15px', background: 'transparent', border: 'none' }}>
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                </svg>
              </button>
            </div>
          </Link>
        </div>
        <div>
          {next.map((item) => (
            <div key={item._id}>
              <Link href="/menus" className={`block py-2 px-4 text-white hover:bg-gray-600`}>
                {item.menu_name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
