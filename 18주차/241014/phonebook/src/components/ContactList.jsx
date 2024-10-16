import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";

const ContactList = () => {
  // 필터된 리스트 상태 정의
  const [filteredList, setFilteredList] = useState([]);
  const { contactList, keyWord } = useSelector((state) => state);

  console.log(contactList, keyWord);

  useEffect(() => {
    if (keyWord !== "") {
      // keyWord를 기준으로 이름 필터링
      const list = contactList.filter((item) => item.name.includes(keyWord));
      setFilteredList(list);
    } else {
      // 검색어가 없으면 전체 연락처를 설정
      setFilteredList(contactList);
    }
  }, [keyWord, contactList]); // keyWord와 contactList가 변경될 때마다 필터링 실행

  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
