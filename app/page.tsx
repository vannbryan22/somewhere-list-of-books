"use client";
import Image from "next/image";
import { Book, books, Genre } from "./books";
import { useState } from "react";
import Modal from "@/components/Modal";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const images = [
  "/book.jpg",
  "/greatgatsby.jpg",
  "/prideandprejudice.jpeg",
  "/lotr.png",
];

export default function Home() {
  const [bookSelected, setBookSelected] = useState<Book | undefined>();
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
  const [query, setQuery] = useState("");

  const genres = (Object.keys(Genre) as Array<keyof typeof Genre>)?.map(
    (key) => ({
      value: Genre[key],
      label: Genre[key],
    }),
  );
  const filteredBooks =
    selectedGenre === undefined
      ? books
      : books.filter((book) => book.genre.includes(selectedGenre as Genre));

  console.log({ filteredBooks });
  return (
    <div>
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold"> Books </h1>
        <div>
          <div className="mx-auto">
            <Combobox
              as="div"
              defaultValue={selectedGenre}
              onChange={(genre) => {
                setQuery("");
                if (genre) {
                  setSelectedGenre(genre as any);
                }
              }}
            >
              <div className="relative mt-2">
                <ComboboxInput
                  placeholder="Select genre"
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  onBlur={() => setQuery("")}
                  displayValue={(genre: any) => genre}
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </ComboboxButton>

                {genres.length > 0 && (
                  <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {genres.map((genre) => (
                      <ComboboxOption
                        key={genre.value}
                        value={genre.value}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                      >
                        <span className="block truncate group-data-[selected]:font-semibold">
                          {genre.label}
                        </span>

                        <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                )}
              </div>
            </Combobox>
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 mt-8"
      >
        {filteredBooks.map((book, index) => (
          <li
            key={index}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            onClick={() => {
              setBookSelected(book);
            }}
          >
            <div className="flex w-full space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex flex-col items-center space-x-3">
                  <div className="relative">
                    <Image
                      //src={"/book.jpg"}
                      src={images?.[index % images.length]}
                      alt={book.title}
                      width={190}
                      height={253}
                    />
                  </div>
                  <div className="w-full mt-4">
                    <h3 className="truncate text-md font-medium text-gray-900">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      Author: {book.author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Genre: {book.genre.toString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        open={bookSelected !== undefined}
        setOpen={() => {
          setBookSelected(undefined);
        }}
      >
        <div className="">
          <div className="flex p-6">
            <div className="">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Image
                    src={"/book.jpg"}
                    alt={bookSelected?.title || ""}
                    width={290}
                    height={353}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-medium text-gray-900">
                    Title: {bookSelected?.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Author: {bookSelected?.author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Genre: {bookSelected?.genre}
                  </p>
                  <p className="prose">{bookSelected?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
