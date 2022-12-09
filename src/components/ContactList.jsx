import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";
import  "./ContactList.scss";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let book = contactList.filter((item) => item.name.includes(keyword));

      //키워드가 (서치에서) 입력이 되었을 때
      setFilter(book);
    } else {
      // 입력값이 없을때
      setFilter(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div className="list">
      <SearchBox />
      <div className="people" >
        인원 : {filter.length} 명
        {filter.map((item) => (
          <ContactItem className="nameList" item={item} />
          //item={item}바로 자식으로 보낼때는 굳이 리덕스까지 쓸 필요는 없어서 props로
          //서치 적용후 필터링 된 리스트
        ))}
      </div>
    </div>
  );
};

export default ContactList;
