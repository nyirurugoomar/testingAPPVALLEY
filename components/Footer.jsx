import React from "react";

function Footer() {
  return (
    <div className="container mx-auto bg-gray-100 ">
      <div className="p-10">
        <div className="md:flex md:justify-center md:text-center space-x-2 border-b-2 border-gray-300 p-4 ">
          <h1>이용약관 |</h1>
          <h1>개인정보 처리방침 |</h1>
          <h1>이메일 무단 수집 금지 |</h1>
          <h1>리뉴 워런티 정책 |</h1>
          <h1>공지사항 |</h1>
          <h1>입점제안서 |</h1>
          <h1>카카오톡 상담</h1>
        </div>
        <div className="md:flex md:justify-center md:text-center space-x-2  text-[12px] text-[#333333] p-2 ">
          <h1>상호 : 주식회사 비엘큐 |</h1>
          <h1>개인정보 처리방침 |</h1>
          <h1>이메일 무단 수집 금지 |</h1>
          <h1>사업자등록번호 : 557-88-01371 |</h1>
          <h1>공지사항 |</h1>
          <h1>통신판매업 신고번호 : 2022-서울강남-01638사업자정보확인 |</h1>
          <h1 className="font-bold">사업자정보확인</h1>
        </div>
        <div className="md:flex md:justify-center md:text-center space-x-2  text-[12px] text-[#333333] p-2  ">
          <h1>
            본사 주소 : 서울특별시 강남구 선릉로94길 14, 코아렌빌딩 6,7층 |
          </h1>
          <h1>물류센터 : 서울특별시 성동구 성수이로22길 43, 금오빌딩 5층</h1>
        </div>
        <div className="md:flex md:justify-center md:text-center space-x-2 text-[12px] text-[#333333] p-2  ">
          <h1>대표이메일 : testvalley@testvalleykorea.com |</h1>
          <h1>대표전화 : 1644-1668 |</h1>
          <h1>전화보다 빠른 상담</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
