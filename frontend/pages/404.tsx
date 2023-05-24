import { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from '../public/images/404bg.svg';
import man from '../public/images/404man.svg';
import art1 from '../public/images/404art.svg';
import art2 from '../public/images/404art2.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const { x: mouseX, y: mouseY } = mousePosition;

    // 이미지를 마우스와 완전히 가깝게 따라가도록 계산
    const followDistance = -100; // 마우스와의 간격 조정

    let newX = mouseX + followDistance;
    let newY = mouseY + followDistance;

    setImagePosition({ x: newX, y: newY });
  }, [mousePosition]);
  return (
    <>
      <Box>
        <div className="star-box">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <Container>
          <div className="bg-box">
            <Image src={bg} alt="img" />
          </div>
          <div className="man-box">
            <Image src={man} alt="img" />
          </div>
          <div className="art1-box">
            <Image src={art1} alt="img" />
          </div>
          <MouseImage
            style={{
              transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
              transition: 'transform 0.2s',
            }}
          >
            <Image src={art2} alt="img" />
          </MouseImage>
          <div className="text-bg"></div>
          <div className="text">
            <div className="title">404</div>
            <div className="content">
              페이지를 찾을 수 없습니다.
              <br />
              존재하지 않는 주소를 입력했거나
              <br />
              요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
            </div>
            <button
              className="btn"
              type="button"
              onClick={() => router.push('/')}
            >
              <strong>홈으로 이동</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Custom404;

const MouseImage = styled.div`
  position: absolute;
  transition: transform 0.2s;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: black;
  overflow: hidden;

  .star-box {
    position: absolute;
    top: 0;
    left: 0;
    .stars {
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: 1487px 822px #fff, 702px 619px #fff, 579px 76px #fff,
        881px 14px #fff, 1903px 741px #fff, 1401px 1791px #fff,
        1316px 857px #fff, 1628px 1376px #fff, 1641px 781px #fff,
        1421px 25px #fff, 525px 254px #fff, 683px 1197px #fff,
        1636px 1573px #fff, 1855px 1220px #fff, 108px 1424px #fff,
        906px 1967px #fff, 205px 1681px #fff, 1930px 731px #fff,
        1957px 104px #fff, 1558px 24px #fff, 211px 468px #fff, 2px 1001px #fff,
        664px 1095px #fff, 1023px 1573px #fff, 272px 122px #fff,
        659px 1641px #fff, 1518px 1633px #fff, 1736px 1016px #fff,
        1085px 1911px #fff, 737px 1784px #fff, 564px 968px #fff,
        150px 1277px #fff, 1848px 505px #fff, 1067px 1414px #fff,
        1619px 1498px #fff, 266px 757px #fff, 450px 1052px #fff,
        604px 1178px #fff, 1069px 1215px #fff, 1045px 1816px #fff,
        1682px 1111px #fff, 578px 1875px #fff, 1197px 20px #fff,
        736px 1923px #fff, 1698px 592px #fff, 491px 1835px #fff,
        106px 1113px #fff, 1944px 1749px #fff, 677px 525px #fff,
        798px 1663px #fff, 463px 19px #fff, 1982px 1091px #fff,
        736px 1597px #fff, 244px 1625px #fff, 1699px 1257px #fff,
        624px 114px #fff, 1290px 48px #fff, 1007px 1111px #fff, 1411px 31px #fff,
        1661px 1065px #fff, 1583px 1593px #fff, 1165px 1985px #fff,
        351px 222px #fff, 158px 709px #fff, 1304px 194px #fff,
        1192px 1923px #fff, 358px 1642px #fff, 889px 1701px #fff,
        424px 1427px #fff, 1928px 573px #fff, 1263px 1473px #fff,
        498px 33px #fff, 1043px 286px #fff, 843px 1917px #fff, 909px 813px #fff,
        1033px 291px #fff, 41px 749px #fff, 1807px 1719px #fff,
        1984px 284px #fff, 1983px 1696px #fff, 1409px 179px #fff,
        1350px 929px #fff, 332px 1747px #fff, 212px 1977px #fff,
        1668px 1254px #fff, 1585px 1736px #fff, 783px 85px #fff,
        1961px 847px #fff, 1692px 996px #fff, 1829px 694px #fff,
        965px 891px #fff, 1793px 102px #fff, 1347px 235px #fff,
        1566px 1954px #fff, 1406px 1765px #fff, 1346px 1832px #fff,
        452px 1205px #fff, 1667px 1688px #fff, 1337px 1664px #fff,
        1728px 832px #fff, 1568px 1213px #fff, 1980px 357px #fff,
        1096px 624px #fff, 210px 636px #fff, 1247px 1830px #fff,
        1789px 1970px #fff, 582px 978px #fff, 1473px 1002px #fff,
        1042px 440px #fff, 1189px 879px #fff, 24px 931px #fff,
        1656px 1848px #fff, 401px 1676px #fff, 192px 1632px #fff,
        970px 1936px #fff, 231px 1849px #fff, 1860px 127px #fff,
        469px 1487px #fff, 436px 1899px #fff, 680px 1290px #fff,
        809px 128px #fff, 163px 683px #fff, 1221px 1732px #fff, 982px 801px #fff,
        149px 455px #fff, 39px 1305px #fff, 248px 1059px #fff,
        1985px 1040px #fff, 823px 1174px #fff, 1823px 12px #fff,
        1558px 1446px #fff, 164px 348px #fff, 504px 311px #fff, 95px 1735px #fff,
        1817px 560px #fff, 1527px 1792px #fff, 296px 377px #fff,
        1480px 353px #fff, 1419px 1148px #fff, 734px 610px #fff,
        1233px 1076px #fff, 1495px 198px #fff, 1722px 1821px #fff,
        57px 914px #fff, 81px 1967px #fff, 157px 1383px #fff, 478px 1545px #fff,
        96px 1485px #fff, 1248px 1516px #fff, 1989px 1475px #fff,
        730px 61px #fff, 646px 342px #fff, 656px 376px #fff, 809px 1394px #fff,
        483px 1916px #fff, 695px 1985px #fff, 954px 279px #fff,
        1704px 234px #fff, 204px 1621px #fff, 490px 414px #fff,
        929px 1852px #fff, 383px 1017px #fff, 1319px 14px #fff,
        103px 1147px #fff, 1780px 62px #fff, 764px 318px #fff, 950px 1468px #fff,
        767px 8px #fff, 1038px 763px #fff, 62px 680px #fff, 1619px 817px #fff,
        1462px 1819px #fff, 1340px 1956px #fff, 1802px 902px #fff,
        1739px 1865px #fff, 886px 854px #fff, 1760px 1693px #fff,
        1571px 1175px #fff, 1149px 1748px #fff, 1521px 1213px #fff,
        575px 162px #fff, 1904px 456px #fff, 1399px 416px #fff,
        1325px 1118px #fff, 1848px 478px #fff, 1447px 841px #fff,
        457px 1619px #fff, 1202px 1049px #fff, 397px 682px #fff,
        465px 1042px #fff, 1264px 1033px #fff, 1304px 1004px #fff,
        649px 1586px #fff, 97px 1308px #fff, 21px 619px #fff, 469px 1742px #fff,
        81px 1745px #fff, 1735px 1208px #fff, 805px 1206px #fff,
        717px 492px #fff, 187px 1317px #fff, 860px 1290px #fff,
        1964px 1712px #fff, 1036px 142px #fff, 1238px 442px #fff,
        1766px 423px #fff, 925px 353px #fff, 569px 5px #fff, 1338px 383px #fff,
        1321px 90px #fff, 1613px 749px #fff, 409px 1835px #fff, 642px 715px #fff,
        1402px 444px #fff, 1669px 197px #fff, 291px 1022px #fff,
        632px 1847px #fff, 678px 810px #fff, 570px 798px #fff, 1521px 681px #fff,
        309px 176px #fff, 1913px 882px #fff, 1129px 1601px #fff,
        1310px 1490px #fff, 883px 1925px #fff, 1354px 140px #fff,
        1474px 628px #fff, 1997px 230px #fff, 351px 1212px #fff,
        576px 706px #fff, 1210px 1325px #fff, 1927px 315px #fff,
        1505px 1249px #fff, 699px 1811px #fff, 1428px 913px #fff,
        691px 1811px #fff, 977px 1645px #fff, 330px 260px #fff,
        1632px 1148px #fff, 878px 1070px #fff, 390px 1127px #fff,
        1915px 1956px #fff, 805px 314px #fff, 260px 623px #fff,
        1471px 1629px #fff, 1333px 1800px #fff, 1158px 1712px #fff,
        813px 641px #fff, 608px 761px #fff, 529px 1163px #fff,
        1916px 1476px #fff, 308px 1823px #fff, 910px 894px #fff,
        839px 431px #fff, 1638px 1599px #fff, 128px 1590px #fff,
        1157px 1788px #fff, 1035px 773px #fff, 389px 277px #fff,
        553px 1014px #fff, 1978px 668px #fff, 615px 1056px #fff,
        944px 1726px #fff, 974px 324px #fff, 1448px 349px #fff, 848px 405px #fff,
        1757px 1457px #fff, 468px 1754px #fff, 714px 414px #fff,
        697px 592px #fff, 1434px 1246px #fff, 258px 1687px #fff,
        953px 1354px #fff, 922px 179px #fff, 1899px 662px #fff,
        1103px 448px #fff, 1205px 799px #fff, 1256px 1247px #fff,
        1772px 194px #fff, 1809px 1285px #fff, 518px 698px #fff,
        1906px 332px #fff, 1182px 536px #fff, 1758px 354px #fff,
        131px 1042px #fff, 923px 1832px #fff, 1117px 1198px #fff,
        143px 1532px #fff, 1401px 395px #fff, 1359px 1550px #fff,
        615px 206px #fff, 694px 475px #fff, 530px 1675px #fff,
        1413px 1544px #fff, 1330px 1429px #fff, 1433px 1453px #fff,
        1271px 846px #fff, 1369px 1790px #fff, 517px 1392px #fff,
        897px 1434px #fff, 1906px 1012px #fff, 1523px 1474px #fff,
        666px 7px #fff, 598px 1273px #fff, 1544px 541px #fff, 248px 268px #fff,
        1992px 848px #fff, 571px 870px #fff, 1228px 679px #fff,
        1096px 187px #fff, 1553px 15px #fff, 523px 779px #fff, 140px 231px #fff,
        659px 577px #fff, 463px 727px #fff, 986px 623px #fff, 1822px 1062px #fff,
        596px 1460px #fff, 462px 115px #fff, 1318px 516px #fff, 409px 729px #fff,
        710px 976px #fff, 1163px 1539px #fff, 1542px 1362px #fff,
        394px 1840px #fff, 904px 1541px #fff, 1549px 538px #fff,
        1594px 1384px #fff, 1030px 1465px #fff, 599px 544px #fff,
        1933px 241px #fff, 1281px 287px #fff, 729px 1282px #fff,
        819px 364px #fff, 797px 1590px #fff, 1023px 1973px #fff,
        1708px 961px #fff, 293px 1953px #fff, 1685px 1879px #fff,
        1285px 1995px #fff, 1380px 219px #fff, 1715px 1980px #fff,
        218px 108px #fff, 700px 711px #fff, 471px 1764px #fff, 10px 1084px #fff,
        1841px 1778px #fff, 1765px 1548px #fff, 712px 1703px #fff,
        1866px 1805px #fff, 1896px 760px #fff, 1391px 40px #fff,
        761px 1516px #fff, 1329px 584px #fff, 385px 1141px #fff,
        1238px 21px #fff, 1070px 486px #fff, 1096px 312px #fff,
        1254px 1674px #fff, 549px 1349px #fff, 1618px 986px #fff,
        707px 1741px #fff, 1718px 1514px #fff, 481px 597px #fff,
        1690px 1472px #fff, 1728px 919px #fff, 173px 1196px #fff,
        1778px 1257px #fff, 1207px 649px #fff, 447px 634px #fff,
        1306px 1444px #fff, 936px 1818px #fff, 855px 1015px #fff,
        1421px 332px #fff, 1138px 1889px #fff, 1974px 694px #fff,
        715px 308px #fff, 757px 155px #fff, 18px 107px #fff, 561px 378px #fff,
        144px 798px #fff, 1184px 967px #fff, 1263px 1130px #fff,
        1382px 895px #fff, 149px 175px #fff, 1297px 839px #fff, 943px 454px #fff,
        178px 1165px #fff, 477px 407px #fff, 416px 219px #fff,
        1056px 1491px #fff, 625px 816px #fff, 100px 1537px #fff,
        1074px 520px #fff, 1031px 1453px #fff, 1377px 614px #fff,
        572px 1314px #fff, 1513px 1235px #fff, 1920px 1211px #fff,
        330px 107px #fff, 1260px 772px #fff, 1198px 84px #fff, 1409px 139px #fff,
        758px 98px #fff, 698px 1771px #fff, 273px 275px #fff, 163px 200px #fff,
        1665px 732px #fff, 95px 600px #fff, 522px 122px #fff, 76px 804px #fff,
        1669px 1526px #fff, 1881px 465px #fff, 1043px 1919px #fff,
        1521px 827px #fff, 1197px 1997px #fff, 489px 593px #fff,
        1899px 722px #fff, 1575px 332px #fff, 327px 718px #fff,
        1959px 1378px #fff, 455px 1333px #fff, 729px 822px #fff,
        748px 126px #fff, 444px 445px #fff, 1856px 262px #fff, 1140px 921px #fff,
        1680px 1227px #fff, 1144px 1742px #fff, 1922px 384px #fff,
        1015px 496px #fff, 1213px 831px #fff, 1793px 898px #fff, 35px 159px #fff,
        571px 1505px #fff, 726px 42px #fff, 1216px 1214px #fff, 938px 50px #fff,
        322px 1017px #fff, 1222px 523px #fff, 660px 1174px #fff,
        355px 859px #fff, 1381px 1648px #fff, 8px 1546px #fff, 1768px 17px #fff,
        301px 1159px #fff, 1550px 185px #fff, 1289px 656px #fff,
        1187px 106px #fff, 669px 1498px #fff, 555px 323px #fff, 454px 288px #fff,
        72px 271px #fff, 445px 1713px #fff, 136px 10px #fff, 1810px 1149px #fff,
        1445px 794px #fff, 406px 1822px #fff, 1994px 741px #fff,
        1837px 1564px #fff, 1264px 80px #fff, 273px 845px #fff,
        322px 1693px #fff, 103px 463px #fff, 689px 1161px #fff, 353px 717px #fff,
        1275px 1895px #fff, 1331px 130px #fff, 1251px 1424px #fff,
        1003px 1183px #fff, 721px 904px #fff, 1261px 416px #fff,
        600px 577px #fff, 384px 910px #fff, 1248px 1547px #fff, 955px 734px #fff,
        686px 891px #fff, 196px 1523px #fff, 831px 327px #fff, 845px 1486px #fff,
        1553px 1438px #fff, 1133px 1152px #fff, 356px 1087px #fff,
        1503px 807px #fff, 1098px 1396px #fff, 94px 1934px #fff,
        1195px 58px #fff, 748px 771px #fff, 940px 570px #fff, 574px 651px #fff,
        835px 533px #fff, 42px 1210px #fff, 496px 1791px #fff, 1610px 296px #fff,
        1446px 1574px #fff, 261px 1765px #fff, 818px 368px #fff,
        573px 743px #fff, 545px 333px #fff, 1500px 1567px #fff,
        1789px 448px #fff, 1139px 1559px #fff, 1607px 1127px #fff,
        1980px 874px #fff, 731px 1559px #fff, 898px 158px #fff,
        1641px 1053px #fff, 53px 377px #fff, 1879px 1370px #fff,
        1377px 899px #fff, 1416px 829px #fff, 863px 1545px #fff,
        1219px 1935px #fff, 1638px 320px #fff, 239px 1807px #fff,
        851px 464px #fff, 1868px 1843px #fff, 679px 203px #fff,
        1762px 842px #fff, 59px 1986px #fff, 1142px 1911px #fff,
        838px 1030px #fff, 1370px 1269px #fff, 781px 274px #fff,
        1193px 551px #fff, 638px 478px #fff, 456px 1854px #fff, 424px 690px #fff,
        13px 600px #fff, 306px 1867px #fff, 384px 1298px #fff, 762px 342px #fff,
        1780px 1196px #fff, 108px 1138px #fff, 1671px 866px #fff,
        831px 1515px #fff, 218px 1455px #fff, 1315px 1494px #fff,
        1365px 1181px #fff, 168px 986px #fff, 349px 506px #fff,
        974px 1437px #fff, 1605px 908px #fff, 1036px 1208px #fff,
        1082px 1407px #fff, 916px 827px #fff, 1526px 566px #fff,
        1159px 1877px #fff, 210px 1180px #fff, 979px 1815px #fff,
        130px 1358px #fff, 1961px 1963px #fff, 771px 591px #fff,
        1905px 487px #fff, 1816px 1565px #fff, 333px 1600px #fff,
        1842px 1774px #fff, 1573px 135px #fff, 1385px 1889px #fff,
        1611px 1033px #fff, 367px 1236px #fff, 779px 1022px #fff,
        1851px 62px #fff, 478px 257px #fff, 1907px 1960px #fff,
        1435px 532px #fff, 662px 8px #fff, 1027px 1924px #fff, 489px 101px #fff,
        76px 1875px #fff, 657px 1682px #fff, 1993px 1955px #fff,
        1432px 1845px #fff, 1530px 1729px #fff, 1211px 896px #fff,
        1525px 133px #fff, 1445px 803px #fff, 530px 62px #fff, 242px 1513px #fff,
        256px 933px #fff, 1701px 936px #fff, 756px 1893px #fff,
        1251px 1298px #fff, 380px 1399px #fff, 1455px 302px #fff,
        1729px 1171px #fff, 585px 49px #fff, 1961px 1124px #fff,
        1241px 552px #fff, 1205px 40px #fff, 1938px 1247px #fff,
        1469px 89px #fff, 239px 1939px #fff, 698px 448px #fff, 1795px 346px #fff,
        151px 487px #fff, 102px 126px #fff, 1184px 418px #fff,
        1625px 1418px #fff, 29px 554px #fff, 1288px 1274px #fff,
        791px 1308px #fff, 151px 934px #fff, 1574px 386px #fff,
        1214px 1703px #fff, 1569px 1424px #fff, 951px 1830px #fff,
        1728px 805px #fff, 312px 1987px #fff, 1468px 529px #fff,
        1153px 1146px #fff, 1262px 1021px #fff, 1648px 1766px #fff,
        306px 70px #fff, 754px 1165px #fff, 1930px 482px #fff,
        1814px 1593px #fff, 1066px 822px #fff, 1250px 877px #fff,
        465px 1885px #fff, 1649px 1281px #fff, 1682px 1601px #fff,
        1367px 1233px #fff, 91px 1327px #fff, 1485px 1355px #fff,
        501px 1673px #fff, 1649px 1259px #fff, 1986px 948px #fff,
        1266px 1829px #fff, 135px 1503px #fff, 647px 296px #fff,
        155px 341px #fff, 649px 1896px #fff, 1617px 334px #fff,
        223px 1507px #fff, 584px 146px #fff, 200px 316px #fff, 575px 1831px #fff,
        1374px 1809px #fff, 1445px 386px #fff, 475px 1249px #fff,
        1954px 89px #fff, 1756px 1192px #fff, 8px 671px #fff, 1366px 1694px #fff,
        1831px 306px #fff, 925px 113px #fff, 160px 1174px #fff,
        534px 1908px #fff, 553px 273px #fff, 423px 45px #fff, 1305px 1098px #fff,
        187px 90px #fff, 1993px 1396px #fff, 842px 1270px #fff,
        1137px 554px #fff, 351px 558px #fff, 1576px 1070px #fff,
        437px 312px #fff, 286px 1019px #fff, 257px 272px #fff,
        1242px 1957px #fff, 1963px 1693px #fff, 772px 447px #fff,
        1641px 508px #fff, 712px 100px #fff, 1307px 1015px #fff,
        742px 327px #fff, 281px 1814px #fff, 1398px 1051px #fff, 167px 9px #fff,
        328px 1489px #fff, 1814px 1804px #fff, 946px 25px #fff,
        549px 1705px #fff, 217px 1477px #fff, 1937px 280px #fff,
        182px 241px #fff, 711px 1365px #fff, 1898px 1043px #fff,
        1807px 346px #fff, 1787px 1253px #fff, 247px 66px #fff,
        1171px 1592px #fff, 846px 895px #fff, 1507px 720px #fff,
        787px 574px #fff, 1593px 1267px #fff, 843px 1902px #fff,
        15px 1454px #fff, 539px 1420px #fff, 1856px 974px #fff, 340px 663px #fff,
        1579px 1091px #fff, 809px 111px #fff, 32px 1128px #fff, 69px 1852px #fff,
        878px 300px #fff, 730px 726px #fff, 1137px 68px #fff;
      animation: animStar 50s linear infinite;
      &:after {
        content: ' ';
        position: absolute;
        top: 2000px;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: 1487px 822px #fff, 702px 619px #fff, 579px 76px #fff,
          881px 14px #fff, 1903px 741px #fff, 1401px 1791px #fff,
          1316px 857px #fff, 1628px 1376px #fff, 1641px 781px #fff,
          1421px 25px #fff, 525px 254px #fff, 683px 1197px #fff,
          1636px 1573px #fff, 1855px 1220px #fff, 108px 1424px #fff,
          906px 1967px #fff, 205px 1681px #fff, 1930px 731px #fff,
          1957px 104px #fff, 1558px 24px #fff, 211px 468px #fff, 2px 1001px #fff,
          664px 1095px #fff, 1023px 1573px #fff, 272px 122px #fff,
          659px 1641px #fff, 1518px 1633px #fff, 1736px 1016px #fff,
          1085px 1911px #fff, 737px 1784px #fff, 564px 968px #fff,
          150px 1277px #fff, 1848px 505px #fff, 1067px 1414px #fff,
          1619px 1498px #fff, 266px 757px #fff, 450px 1052px #fff,
          604px 1178px #fff, 1069px 1215px #fff, 1045px 1816px #fff,
          1682px 1111px #fff, 578px 1875px #fff, 1197px 20px #fff,
          736px 1923px #fff, 1698px 592px #fff, 491px 1835px #fff,
          106px 1113px #fff, 1944px 1749px #fff, 677px 525px #fff,
          798px 1663px #fff, 463px 19px #fff, 1982px 1091px #fff,
          736px 1597px #fff, 244px 1625px #fff, 1699px 1257px #fff,
          624px 114px #fff, 1290px 48px #fff, 1007px 1111px #fff,
          1411px 31px #fff, 1661px 1065px #fff, 1583px 1593px #fff,
          1165px 1985px #fff, 351px 222px #fff, 158px 709px #fff,
          1304px 194px #fff, 1192px 1923px #fff, 358px 1642px #fff,
          889px 1701px #fff, 424px 1427px #fff, 1928px 573px #fff,
          1263px 1473px #fff, 498px 33px #fff, 1043px 286px #fff,
          843px 1917px #fff, 909px 813px #fff, 1033px 291px #fff,
          41px 749px #fff, 1807px 1719px #fff, 1984px 284px #fff,
          1983px 1696px #fff, 1409px 179px #fff, 1350px 929px #fff,
          332px 1747px #fff, 212px 1977px #fff, 1668px 1254px #fff,
          1585px 1736px #fff, 783px 85px #fff, 1961px 847px #fff,
          1692px 996px #fff, 1829px 694px #fff, 965px 891px #fff,
          1793px 102px #fff, 1347px 235px #fff, 1566px 1954px #fff,
          1406px 1765px #fff, 1346px 1832px #fff, 452px 1205px #fff,
          1667px 1688px #fff, 1337px 1664px #fff, 1728px 832px #fff,
          1568px 1213px #fff, 1980px 357px #fff, 1096px 624px #fff,
          210px 636px #fff, 1247px 1830px #fff, 1789px 1970px #fff,
          582px 978px #fff, 1473px 1002px #fff, 1042px 440px #fff,
          1189px 879px #fff, 24px 931px #fff, 1656px 1848px #fff,
          401px 1676px #fff, 192px 1632px #fff, 970px 1936px #fff,
          231px 1849px #fff, 1860px 127px #fff, 469px 1487px #fff,
          436px 1899px #fff, 680px 1290px #fff, 809px 128px #fff,
          163px 683px #fff, 1221px 1732px #fff, 982px 801px #fff,
          149px 455px #fff, 39px 1305px #fff, 248px 1059px #fff,
          1985px 1040px #fff, 823px 1174px #fff, 1823px 12px #fff,
          1558px 1446px #fff, 164px 348px #fff, 504px 311px #fff,
          95px 1735px #fff, 1817px 560px #fff, 1527px 1792px #fff,
          296px 377px #fff, 1480px 353px #fff, 1419px 1148px #fff,
          734px 610px #fff, 1233px 1076px #fff, 1495px 198px #fff,
          1722px 1821px #fff, 57px 914px #fff, 81px 1967px #fff,
          157px 1383px #fff, 478px 1545px #fff, 96px 1485px #fff,
          1248px 1516px #fff, 1989px 1475px #fff, 730px 61px #fff,
          646px 342px #fff, 656px 376px #fff, 809px 1394px #fff,
          483px 1916px #fff, 695px 1985px #fff, 954px 279px #fff,
          1704px 234px #fff, 204px 1621px #fff, 490px 414px #fff,
          929px 1852px #fff, 383px 1017px #fff, 1319px 14px #fff,
          103px 1147px #fff, 1780px 62px #fff, 764px 318px #fff,
          950px 1468px #fff, 767px 8px #fff, 1038px 763px #fff, 62px 680px #fff,
          1619px 817px #fff, 1462px 1819px #fff, 1340px 1956px #fff,
          1802px 902px #fff, 1739px 1865px #fff, 886px 854px #fff,
          1760px 1693px #fff, 1571px 1175px #fff, 1149px 1748px #fff,
          1521px 1213px #fff, 575px 162px #fff, 1904px 456px #fff,
          1399px 416px #fff, 1325px 1118px #fff, 1848px 478px #fff,
          1447px 841px #fff, 457px 1619px #fff, 1202px 1049px #fff,
          397px 682px #fff, 465px 1042px #fff, 1264px 1033px #fff,
          1304px 1004px #fff, 649px 1586px #fff, 97px 1308px #fff,
          21px 619px #fff, 469px 1742px #fff, 81px 1745px #fff,
          1735px 1208px #fff, 805px 1206px #fff, 717px 492px #fff,
          187px 1317px #fff, 860px 1290px #fff, 1964px 1712px #fff,
          1036px 142px #fff, 1238px 442px #fff, 1766px 423px #fff,
          925px 353px #fff, 569px 5px #fff, 1338px 383px #fff, 1321px 90px #fff,
          1613px 749px #fff, 409px 1835px #fff, 642px 715px #fff,
          1402px 444px #fff, 1669px 197px #fff, 291px 1022px #fff,
          632px 1847px #fff, 678px 810px #fff, 570px 798px #fff,
          1521px 681px #fff, 309px 176px #fff, 1913px 882px #fff,
          1129px 1601px #fff, 1310px 1490px #fff, 883px 1925px #fff,
          1354px 140px #fff, 1474px 628px #fff, 1997px 230px #fff,
          351px 1212px #fff, 576px 706px #fff, 1210px 1325px #fff,
          1927px 315px #fff, 1505px 1249px #fff, 699px 1811px #fff,
          1428px 913px #fff, 691px 1811px #fff, 977px 1645px #fff,
          330px 260px #fff, 1632px 1148px #fff, 878px 1070px #fff,
          390px 1127px #fff, 1915px 1956px #fff, 805px 314px #fff,
          260px 623px #fff, 1471px 1629px #fff, 1333px 1800px #fff,
          1158px 1712px #fff, 813px 641px #fff, 608px 761px #fff,
          529px 1163px #fff, 1916px 1476px #fff, 308px 1823px #fff,
          910px 894px #fff, 839px 431px #fff, 1638px 1599px #fff,
          128px 1590px #fff, 1157px 1788px #fff, 1035px 773px #fff,
          389px 277px #fff, 553px 1014px #fff, 1978px 668px #fff,
          615px 1056px #fff, 944px 1726px #fff, 974px 324px #fff,
          1448px 349px #fff, 848px 405px #fff, 1757px 1457px #fff,
          468px 1754px #fff, 714px 414px #fff, 697px 592px #fff,
          1434px 1246px #fff, 258px 1687px #fff, 953px 1354px #fff,
          922px 179px #fff, 1899px 662px #fff, 1103px 448px #fff,
          1205px 799px #fff, 1256px 1247px #fff, 1772px 194px #fff,
          1809px 1285px #fff, 518px 698px #fff, 1906px 332px #fff,
          1182px 536px #fff, 1758px 354px #fff, 131px 1042px #fff,
          923px 1832px #fff, 1117px 1198px #fff, 143px 1532px #fff,
          1401px 395px #fff, 1359px 1550px #fff, 615px 206px #fff,
          694px 475px #fff, 530px 1675px #fff, 1413px 1544px #fff,
          1330px 1429px #fff, 1433px 1453px #fff, 1271px 846px #fff,
          1369px 1790px #fff, 517px 1392px #fff, 897px 1434px #fff,
          1906px 1012px #fff, 1523px 1474px #fff, 666px 7px #fff,
          598px 1273px #fff, 1544px 541px #fff, 248px 268px #fff,
          1992px 848px #fff, 571px 870px #fff, 1228px 679px #fff,
          1096px 187px #fff, 1553px 15px #fff, 523px 779px #fff,
          140px 231px #fff, 659px 577px #fff, 463px 727px #fff, 986px 623px #fff,
          1822px 1062px #fff, 596px 1460px #fff, 462px 115px #fff,
          1318px 516px #fff, 409px 729px #fff, 710px 976px #fff,
          1163px 1539px #fff, 1542px 1362px #fff, 394px 1840px #fff,
          904px 1541px #fff, 1549px 538px #fff, 1594px 1384px #fff,
          1030px 1465px #fff, 599px 544px #fff, 1933px 241px #fff,
          1281px 287px #fff, 729px 1282px #fff, 819px 364px #fff,
          797px 1590px #fff, 1023px 1973px #fff, 1708px 961px #fff,
          293px 1953px #fff, 1685px 1879px #fff, 1285px 1995px #fff,
          1380px 219px #fff, 1715px 1980px #fff, 218px 108px #fff,
          700px 711px #fff, 471px 1764px #fff, 10px 1084px #fff,
          1841px 1778px #fff, 1765px 1548px #fff, 712px 1703px #fff,
          1866px 1805px #fff, 1896px 760px #fff, 1391px 40px #fff,
          761px 1516px #fff, 1329px 584px #fff, 385px 1141px #fff,
          1238px 21px #fff, 1070px 486px #fff, 1096px 312px #fff,
          1254px 1674px #fff, 549px 1349px #fff, 1618px 986px #fff,
          707px 1741px #fff, 1718px 1514px #fff, 481px 597px #fff,
          1690px 1472px #fff, 1728px 919px #fff, 173px 1196px #fff,
          1778px 1257px #fff, 1207px 649px #fff, 447px 634px #fff,
          1306px 1444px #fff, 936px 1818px #fff, 855px 1015px #fff,
          1421px 332px #fff, 1138px 1889px #fff, 1974px 694px #fff,
          715px 308px #fff, 757px 155px #fff, 18px 107px #fff, 561px 378px #fff,
          144px 798px #fff, 1184px 967px #fff, 1263px 1130px #fff,
          1382px 895px #fff, 149px 175px #fff, 1297px 839px #fff,
          943px 454px #fff, 178px 1165px #fff, 477px 407px #fff,
          416px 219px #fff, 1056px 1491px #fff, 625px 816px #fff,
          100px 1537px #fff, 1074px 520px #fff, 1031px 1453px #fff,
          1377px 614px #fff, 572px 1314px #fff, 1513px 1235px #fff,
          1920px 1211px #fff, 330px 107px #fff, 1260px 772px #fff,
          1198px 84px #fff, 1409px 139px #fff, 758px 98px #fff,
          698px 1771px #fff, 273px 275px #fff, 163px 200px #fff,
          1665px 732px #fff, 95px 600px #fff, 522px 122px #fff, 76px 804px #fff,
          1669px 1526px #fff, 1881px 465px #fff, 1043px 1919px #fff,
          1521px 827px #fff, 1197px 1997px #fff, 489px 593px #fff,
          1899px 722px #fff, 1575px 332px #fff, 327px 718px #fff,
          1959px 1378px #fff, 455px 1333px #fff, 729px 822px #fff,
          748px 126px #fff, 444px 445px #fff, 1856px 262px #fff,
          1140px 921px #fff, 1680px 1227px #fff, 1144px 1742px #fff,
          1922px 384px #fff, 1015px 496px #fff, 1213px 831px #fff,
          1793px 898px #fff, 35px 159px #fff, 571px 1505px #fff, 726px 42px #fff,
          1216px 1214px #fff, 938px 50px #fff, 322px 1017px #fff,
          1222px 523px #fff, 660px 1174px #fff, 355px 859px #fff,
          1381px 1648px #fff, 8px 1546px #fff, 1768px 17px #fff,
          301px 1159px #fff, 1550px 185px #fff, 1289px 656px #fff,
          1187px 106px #fff, 669px 1498px #fff, 555px 323px #fff,
          454px 288px #fff, 72px 271px #fff, 445px 1713px #fff, 136px 10px #fff,
          1810px 1149px #fff, 1445px 794px #fff, 406px 1822px #fff,
          1994px 741px #fff, 1837px 1564px #fff, 1264px 80px #fff,
          273px 845px #fff, 322px 1693px #fff, 103px 463px #fff,
          689px 1161px #fff, 353px 717px #fff, 1275px 1895px #fff,
          1331px 130px #fff, 1251px 1424px #fff, 1003px 1183px #fff,
          721px 904px #fff, 1261px 416px #fff, 600px 577px #fff,
          384px 910px #fff, 1248px 1547px #fff, 955px 734px #fff,
          686px 891px #fff, 196px 1523px #fff, 831px 327px #fff,
          845px 1486px #fff, 1553px 1438px #fff, 1133px 1152px #fff,
          356px 1087px #fff, 1503px 807px #fff, 1098px 1396px #fff,
          94px 1934px #fff, 1195px 58px #fff, 748px 771px #fff, 940px 570px #fff,
          574px 651px #fff, 835px 533px #fff, 42px 1210px #fff,
          496px 1791px #fff, 1610px 296px #fff, 1446px 1574px #fff,
          261px 1765px #fff, 818px 368px #fff, 573px 743px #fff,
          545px 333px #fff, 1500px 1567px #fff, 1789px 448px #fff,
          1139px 1559px #fff, 1607px 1127px #fff, 1980px 874px #fff,
          731px 1559px #fff, 898px 158px #fff, 1641px 1053px #fff,
          53px 377px #fff, 1879px 1370px #fff, 1377px 899px #fff,
          1416px 829px #fff, 863px 1545px #fff, 1219px 1935px #fff,
          1638px 320px #fff, 239px 1807px #fff, 851px 464px #fff,
          1868px 1843px #fff, 679px 203px #fff, 1762px 842px #fff,
          59px 1986px #fff, 1142px 1911px #fff, 838px 1030px #fff,
          1370px 1269px #fff, 781px 274px #fff, 1193px 551px #fff,
          638px 478px #fff, 456px 1854px #fff, 424px 690px #fff, 13px 600px #fff,
          306px 1867px #fff, 384px 1298px #fff, 762px 342px #fff,
          1780px 1196px #fff, 108px 1138px #fff, 1671px 866px #fff,
          831px 1515px #fff, 218px 1455px #fff, 1315px 1494px #fff,
          1365px 1181px #fff, 168px 986px #fff, 349px 506px #fff,
          974px 1437px #fff, 1605px 908px #fff, 1036px 1208px #fff,
          1082px 1407px #fff, 916px 827px #fff, 1526px 566px #fff,
          1159px 1877px #fff, 210px 1180px #fff, 979px 1815px #fff,
          130px 1358px #fff, 1961px 1963px #fff, 771px 591px #fff,
          1905px 487px #fff, 1816px 1565px #fff, 333px 1600px #fff,
          1842px 1774px #fff, 1573px 135px #fff, 1385px 1889px #fff,
          1611px 1033px #fff, 367px 1236px #fff, 779px 1022px #fff,
          1851px 62px #fff, 478px 257px #fff, 1907px 1960px #fff,
          1435px 532px #fff, 662px 8px #fff, 1027px 1924px #fff,
          489px 101px #fff, 76px 1875px #fff, 657px 1682px #fff,
          1993px 1955px #fff, 1432px 1845px #fff, 1530px 1729px #fff,
          1211px 896px #fff, 1525px 133px #fff, 1445px 803px #fff,
          530px 62px #fff, 242px 1513px #fff, 256px 933px #fff,
          1701px 936px #fff, 756px 1893px #fff, 1251px 1298px #fff,
          380px 1399px #fff, 1455px 302px #fff, 1729px 1171px #fff,
          585px 49px #fff, 1961px 1124px #fff, 1241px 552px #fff,
          1205px 40px #fff, 1938px 1247px #fff, 1469px 89px #fff,
          239px 1939px #fff, 698px 448px #fff, 1795px 346px #fff,
          151px 487px #fff, 102px 126px #fff, 1184px 418px #fff,
          1625px 1418px #fff, 29px 554px #fff, 1288px 1274px #fff,
          791px 1308px #fff, 151px 934px #fff, 1574px 386px #fff,
          1214px 1703px #fff, 1569px 1424px #fff, 951px 1830px #fff,
          1728px 805px #fff, 312px 1987px #fff, 1468px 529px #fff,
          1153px 1146px #fff, 1262px 1021px #fff, 1648px 1766px #fff,
          306px 70px #fff, 754px 1165px #fff, 1930px 482px #fff,
          1814px 1593px #fff, 1066px 822px #fff, 1250px 877px #fff,
          465px 1885px #fff, 1649px 1281px #fff, 1682px 1601px #fff,
          1367px 1233px #fff, 91px 1327px #fff, 1485px 1355px #fff,
          501px 1673px #fff, 1649px 1259px #fff, 1986px 948px #fff,
          1266px 1829px #fff, 135px 1503px #fff, 647px 296px #fff,
          155px 341px #fff, 649px 1896px #fff, 1617px 334px #fff,
          223px 1507px #fff, 584px 146px #fff, 200px 316px #fff,
          575px 1831px #fff, 1374px 1809px #fff, 1445px 386px #fff,
          475px 1249px #fff, 1954px 89px #fff, 1756px 1192px #fff,
          8px 671px #fff, 1366px 1694px #fff, 1831px 306px #fff,
          925px 113px #fff, 160px 1174px #fff, 534px 1908px #fff,
          553px 273px #fff, 423px 45px #fff, 1305px 1098px #fff, 187px 90px #fff,
          1993px 1396px #fff, 842px 1270px #fff, 1137px 554px #fff,
          351px 558px #fff, 1576px 1070px #fff, 437px 312px #fff,
          286px 1019px #fff, 257px 272px #fff, 1242px 1957px #fff,
          1963px 1693px #fff, 772px 447px #fff, 1641px 508px #fff,
          712px 100px #fff, 1307px 1015px #fff, 742px 327px #fff,
          281px 1814px #fff, 1398px 1051px #fff, 167px 9px #fff,
          328px 1489px #fff, 1814px 1804px #fff, 946px 25px #fff,
          549px 1705px #fff, 217px 1477px #fff, 1937px 280px #fff,
          182px 241px #fff, 711px 1365px #fff, 1898px 1043px #fff,
          1807px 346px #fff, 1787px 1253px #fff, 247px 66px #fff,
          1171px 1592px #fff, 846px 895px #fff, 1507px 720px #fff,
          787px 574px #fff, 1593px 1267px #fff, 843px 1902px #fff,
          15px 1454px #fff, 539px 1420px #fff, 1856px 974px #fff,
          340px 663px #fff, 1579px 1091px #fff, 809px 111px #fff,
          32px 1128px #fff, 69px 1852px #fff, 878px 300px #fff, 730px 726px #fff,
          1137px 68px #fff;
      }
    }

    .stars2 {
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 592px 134px #fff, 346px 741px #fff, 1000px 1781px #fff,
        996px 728px #fff, 1085px 1462px #fff, 526px 1128px #fff,
        1951px 557px #fff, 673px 92px #fff, 415px 776px #fff, 1570px 643px #fff,
        121px 697px #fff, 782px 1847px #fff, 1853px 256px #fff, 910px 195px #fff,
        362px 1201px #fff, 52px 1627px #fff, 387px 899px #fff, 547px 1995px #fff,
        1298px 440px #fff, 1474px 1713px #fff, 1109px 1322px #fff,
        1720px 1237px #fff, 473px 1196px #fff, 1682px 580px #fff,
        1476px 655px #fff, 1254px 731px #fff, 1069px 1840px #fff,
        291px 1789px #fff, 825px 1237px #fff, 1067px 543px #fff,
        962px 990px #fff, 1606px 1387px #fff, 884px 1555px #fff,
        1209px 1830px #fff, 439px 535px #fff, 360px 1451px #fff,
        1018px 1837px #fff, 1964px 677px #fff, 1095px 159px #fff,
        390px 245px #fff, 1869px 597px #fff, 1857px 544px #fff,
        745px 1186px #fff, 336px 1867px #fff, 250px 1377px #fff,
        1872px 168px #fff, 878px 1299px #fff, 1257px 177px #fff,
        984px 303px #fff, 544px 303px #fff, 1250px 1052px #fff,
        152px 1322px #fff, 1466px 289px #fff, 1104px 1116px #fff,
        1796px 482px #fff, 1086px 525px #fff, 1540px 1822px #fff,
        196px 1999px #fff, 1893px 771px #fff, 1171px 1728px #fff,
        1996px 710px #fff, 436px 370px #fff, 1270px 1570px #fff, 55px 900px #fff,
        1875px 1291px #fff, 337px 1251px #fff, 25px 5px #fff, 1619px 835px #fff,
        410px 676px #fff, 956px 531px #fff, 90px 489px #fff, 561px 576px #fff,
        907px 45px #fff, 1657px 810px #fff, 1029px 1705px #fff,
        1281px 828px #fff, 466px 961px #fff, 674px 1105px #fff, 456px 918px #fff,
        331px 148px #fff, 1105px 1681px #fff, 922px 319px #fff,
        1600px 1403px #fff, 420px 977px #fff, 166px 1637px #fff,
        1033px 1668px #fff, 1884px 208px #fff, 552px 720px #fff,
        1543px 119px #fff, 587px 103px #fff, 348px 1766px #fff, 664px 761px #fff,
        565px 1253px #fff, 1472px 1332px #fff, 471px 1569px #fff,
        747px 76px #fff, 1429px 308px #fff, 1850px 597px #fff,
        1148px 1085px #fff, 307px 208px #fff, 253px 736px #fff, 148px 122px #fff,
        366px 1163px #fff, 1589px 1436px #fff, 1359px 1027px #fff,
        1805px 95px #fff, 910px 837px #fff, 1578px 976px #fff, 954px 710px #fff,
        743px 1552px #fff, 271px 686px #fff, 1960px 1336px #fff,
        740px 1431px #fff, 972px 1184px #fff, 1690px 1942px #fff,
        1222px 839px #fff, 1151px 164px #fff, 1248px 871px #fff,
        893px 1975px #fff, 1979px 859px #fff, 139px 642px #fff, 856px 523px #fff,
        879px 1186px #fff, 1440px 1036px #fff, 1624px 1411px #fff,
        1320px 1239px #fff, 1747px 1662px #fff, 1155px 765px #fff,
        885px 43px #fff, 552px 1690px #fff, 731px 293px #fff, 1655px 1809px #fff,
        187px 1766px #fff, 811px 1318px #fff, 716px 241px #fff, 633px 668px #fff,
        916px 1359px #fff, 1054px 620px #fff, 1038px 1345px #fff,
        1334px 1118px #fff, 393px 52px #fff, 1722px 590px #fff,
        1329px 244px #fff, 1388px 1983px #fff, 66px 1845px #fff,
        172px 995px #fff, 1258px 1766px #fff, 310px 110px #fff,
        1019px 1705px #fff, 394px 1471px #fff, 489px 1962px #fff,
        183px 1155px #fff, 90px 1153px #fff, 845px 60px #fff, 403px 1930px #fff,
        820px 256px #fff, 394px 1716px #fff, 1744px 690px #fff,
        831px 1562px #fff, 110px 1000px #fff, 1604px 585px #fff,
        1954px 1442px #fff, 397px 1085px #fff, 242px 1785px #fff,
        1216px 1885px #fff, 1873px 1700px #fff, 1181px 8px #fff,
        1978px 701px #fff, 1968px 391px #fff, 1621px 947px #fff,
        1142px 1244px #fff, 558px 584px #fff, 881px 767px #fff, 96px 960px #fff,
        1143px 262px #fff, 690px 1357px #fff, 218px 1363px #fff,
        1507px 16px #fff, 1947px 1785px #fff, 755px 1928px #fff,
        1620px 1126px #fff, 1194px 1932px #fff, 728px 1068px #fff,
        542px 1765px #fff, 1159px 1334px #fff, 1284px 444px #fff,
        1623px 1161px #fff, 190px 1011px #fff, 855px 1379px #fff,
        1244px 30px #fff, 1144px 1873px #fff, 1276px 958px #fff,
        1675px 1097px #fff, 354px 1735px #fff, 1534px 235px #fff,
        560px 1850px #fff, 493px 1737px #fff, 782px 598px #fff,
        1709px 1377px #fff, 717px 1040px #fff;
      animation: animStar 100s linear infinite;
      &:after {
        content: ' ';
        position: absolute;
        top: 2000px;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: 592px 134px #fff, 346px 741px #fff, 1000px 1781px #fff,
          996px 728px #fff, 1085px 1462px #fff, 526px 1128px #fff,
          1951px 557px #fff, 673px 92px #fff, 415px 776px #fff,
          1570px 643px #fff, 121px 697px #fff, 782px 1847px #fff,
          1853px 256px #fff, 910px 195px #fff, 362px 1201px #fff,
          52px 1627px #fff, 387px 899px #fff, 547px 1995px #fff,
          1298px 440px #fff, 1474px 1713px #fff, 1109px 1322px #fff,
          1720px 1237px #fff, 473px 1196px #fff, 1682px 580px #fff,
          1476px 655px #fff, 1254px 731px #fff, 1069px 1840px #fff,
          291px 1789px #fff, 825px 1237px #fff, 1067px 543px #fff,
          962px 990px #fff, 1606px 1387px #fff, 884px 1555px #fff,
          1209px 1830px #fff, 439px 535px #fff, 360px 1451px #fff,
          1018px 1837px #fff, 1964px 677px #fff, 1095px 159px #fff,
          390px 245px #fff, 1869px 597px #fff, 1857px 544px #fff,
          745px 1186px #fff, 336px 1867px #fff, 250px 1377px #fff,
          1872px 168px #fff, 878px 1299px #fff, 1257px 177px #fff,
          984px 303px #fff, 544px 303px #fff, 1250px 1052px #fff,
          152px 1322px #fff, 1466px 289px #fff, 1104px 1116px #fff,
          1796px 482px #fff, 1086px 525px #fff, 1540px 1822px #fff,
          196px 1999px #fff, 1893px 771px #fff, 1171px 1728px #fff,
          1996px 710px #fff, 436px 370px #fff, 1270px 1570px #fff,
          55px 900px #fff, 1875px 1291px #fff, 337px 1251px #fff, 25px 5px #fff,
          1619px 835px #fff, 410px 676px #fff, 956px 531px #fff, 90px 489px #fff,
          561px 576px #fff, 907px 45px #fff, 1657px 810px #fff,
          1029px 1705px #fff, 1281px 828px #fff, 466px 961px #fff,
          674px 1105px #fff, 456px 918px #fff, 331px 148px #fff,
          1105px 1681px #fff, 922px 319px #fff, 1600px 1403px #fff,
          420px 977px #fff, 166px 1637px #fff, 1033px 1668px #fff,
          1884px 208px #fff, 552px 720px #fff, 1543px 119px #fff,
          587px 103px #fff, 348px 1766px #fff, 664px 761px #fff,
          565px 1253px #fff, 1472px 1332px #fff, 471px 1569px #fff,
          747px 76px #fff, 1429px 308px #fff, 1850px 597px #fff,
          1148px 1085px #fff, 307px 208px #fff, 253px 736px #fff,
          148px 122px #fff, 366px 1163px #fff, 1589px 1436px #fff,
          1359px 1027px #fff, 1805px 95px #fff, 910px 837px #fff,
          1578px 976px #fff, 954px 710px #fff, 743px 1552px #fff,
          271px 686px #fff, 1960px 1336px #fff, 740px 1431px #fff,
          972px 1184px #fff, 1690px 1942px #fff, 1222px 839px #fff,
          1151px 164px #fff, 1248px 871px #fff, 893px 1975px #fff,
          1979px 859px #fff, 139px 642px #fff, 856px 523px #fff,
          879px 1186px #fff, 1440px 1036px #fff, 1624px 1411px #fff,
          1320px 1239px #fff, 1747px 1662px #fff, 1155px 765px #fff,
          885px 43px #fff, 552px 1690px #fff, 731px 293px #fff,
          1655px 1809px #fff, 187px 1766px #fff, 811px 1318px #fff,
          716px 241px #fff, 633px 668px #fff, 916px 1359px #fff,
          1054px 620px #fff, 1038px 1345px #fff, 1334px 1118px #fff,
          393px 52px #fff, 1722px 590px #fff, 1329px 244px #fff,
          1388px 1983px #fff, 66px 1845px #fff, 172px 995px #fff,
          1258px 1766px #fff, 310px 110px #fff, 1019px 1705px #fff,
          394px 1471px #fff, 489px 1962px #fff, 183px 1155px #fff,
          90px 1153px #fff, 845px 60px #fff, 403px 1930px #fff, 820px 256px #fff,
          394px 1716px #fff, 1744px 690px #fff, 831px 1562px #fff,
          110px 1000px #fff, 1604px 585px #fff, 1954px 1442px #fff,
          397px 1085px #fff, 242px 1785px #fff, 1216px 1885px #fff,
          1873px 1700px #fff, 1181px 8px #fff, 1978px 701px #fff,
          1968px 391px #fff, 1621px 947px #fff, 1142px 1244px #fff,
          558px 584px #fff, 881px 767px #fff, 96px 960px #fff, 1143px 262px #fff,
          690px 1357px #fff, 218px 1363px #fff, 1507px 16px #fff,
          1947px 1785px #fff, 755px 1928px #fff, 1620px 1126px #fff,
          1194px 1932px #fff, 728px 1068px #fff, 542px 1765px #fff,
          1159px 1334px #fff, 1284px 444px #fff, 1623px 1161px #fff,
          190px 1011px #fff, 855px 1379px #fff, 1244px 30px #fff,
          1144px 1873px #fff, 1276px 958px #fff, 1675px 1097px #fff,
          354px 1735px #fff, 1534px 235px #fff, 560px 1850px #fff,
          493px 1737px #fff, 782px 598px #fff, 1709px 1377px #fff,
          717px 1040px #fff;
      }
    }

    .stars3 {
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 222px 946px #fff, 408px 926px #fff, 1608px 1741px #fff,
        1977px 1436px #fff, 713px 1152px #fff, 139px 39px #fff,
        497px 1590px #fff, 1808px 1652px #fff, 598px 667px #fff,
        1962px 75px #fff, 331px 1245px #fff, 1600px 1822px #fff,
        1463px 883px #fff, 299px 335px #fff, 1229px 909px #fff, 448px 581px #fff,
        1346px 571px #fff, 1247px 458px #fff, 799px 186px #fff, 643px 404px #fff,
        1330px 790px #fff, 299px 699px #fff, 1593px 1891px #fff,
        934px 1230px #fff, 1162px 1835px #fff, 903px 1024px #fff,
        596px 900px #fff, 1223px 1078px #fff, 682px 1024px #fff,
        151px 373px #fff, 54px 1586px #fff, 657px 1902px #fff, 812px 273px #fff,
        705px 1142px #fff, 1902px 1353px #fff, 1222px 1980px #fff,
        767px 158px #fff, 22px 663px #fff, 1055px 727px #fff, 1728px 750px #fff,
        223px 287px #fff, 438px 127px #fff, 224px 1146px #fff,
        1594px 1466px #fff, 1505px 436px #fff, 389px 1049px #fff,
        596px 435px #fff, 1997px 1798px #fff, 29px 51px #fff, 40px 514px #fff,
        1779px 769px #fff, 652px 1211px #fff, 1599px 347px #fff,
        1854px 1941px #fff, 485px 1633px #fff, 697px 1894px #fff,
        1772px 877px #fff, 555px 1030px #fff, 976px 1338px #fff,
        541px 1112px #fff, 817px 899px #fff, 961px 923px #fff, 115px 1321px #fff,
        875px 434px #fff, 1577px 1980px #fff, 1160px 131px #fff, 15px 160px #fff,
        979px 56px #fff, 959px 1756px #fff, 1358px 435px #fff, 563px 591px #fff,
        1284px 475px #fff, 341px 601px #fff, 74px 471px #fff, 416px 584px #fff,
        692px 536px #fff, 1041px 377px #fff, 1601px 1923px #fff,
        1014px 241px #fff, 122px 1594px #fff, 1510px 280px #fff,
        195px 1720px #fff, 152px 104px #fff, 1686px 811px #fff,
        1329px 750px #fff, 1655px 441px #fff, 1288px 1040px #fff,
        1802px 1368px #fff, 767px 615px #fff, 302px 195px #fff,
        1973px 1902px #fff, 1088px 1583px #fff, 1840px 1126px #fff,
        500px 111px #fff, 1263px 667px #fff, 1748px 121px #fff,
        1608px 364px #fff, 1064px 1610px #fff, 1682px 1826px #fff,
        1747px 1800px #fff;
      animation: animStar 150s linear infinite;
      &:after {
        content: '';
        position: absolute;
        top: 2000px;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: 222px 946px #fff, 408px 926px #fff, 1608px 1741px #fff,
          1977px 1436px #fff, 713px 1152px #fff, 139px 39px #fff,
          497px 1590px #fff, 1808px 1652px #fff, 598px 667px #fff,
          1962px 75px #fff, 331px 1245px #fff, 1600px 1822px #fff,
          1463px 883px #fff, 299px 335px #fff, 1229px 909px #fff,
          448px 581px #fff, 1346px 571px #fff, 1247px 458px #fff,
          799px 186px #fff, 643px 404px #fff, 1330px 790px #fff,
          299px 699px #fff, 1593px 1891px #fff, 934px 1230px #fff,
          1162px 1835px #fff, 903px 1024px #fff, 596px 900px #fff,
          1223px 1078px #fff, 682px 1024px #fff, 151px 373px #fff,
          54px 1586px #fff, 657px 1902px #fff, 812px 273px #fff,
          705px 1142px #fff, 1902px 1353px #fff, 1222px 1980px #fff,
          767px 158px #fff, 22px 663px #fff, 1055px 727px #fff,
          1728px 750px #fff, 223px 287px #fff, 438px 127px #fff,
          224px 1146px #fff, 1594px 1466px #fff, 1505px 436px #fff,
          389px 1049px #fff, 596px 435px #fff, 1997px 1798px #fff,
          29px 51px #fff, 40px 514px #fff, 1779px 769px #fff, 652px 1211px #fff,
          1599px 347px #fff, 1854px 1941px #fff, 485px 1633px #fff,
          697px 1894px #fff, 1772px 877px #fff, 555px 1030px #fff,
          976px 1338px #fff, 541px 1112px #fff, 817px 899px #fff,
          961px 923px #fff, 115px 1321px #fff, 875px 434px #fff,
          1577px 1980px #fff, 1160px 131px #fff, 15px 160px #fff,
          979px 56px #fff, 959px 1756px #fff, 1358px 435px #fff,
          563px 591px #fff, 1284px 475px #fff, 341px 601px #fff, 74px 471px #fff,
          416px 584px #fff, 692px 536px #fff, 1041px 377px #fff,
          1601px 1923px #fff, 1014px 241px #fff, 122px 1594px #fff,
          1510px 280px #fff, 195px 1720px #fff, 152px 104px #fff,
          1686px 811px #fff, 1329px 750px #fff, 1655px 441px #fff,
          1288px 1040px #fff, 1802px 1368px #fff, 767px 615px #fff,
          302px 195px #fff, 1973px 1902px #fff, 1088px 1583px #fff,
          1840px 1126px #fff, 500px 111px #fff, 1263px 667px #fff,
          1748px 121px #fff, 1608px 364px #fff, 1064px 1610px #fff,
          1682px 1826px #fff, 1747px 1800px #fff;
      }
    }

    @keyframes animStar {
      from {
        transform: translateY(0px);
      }

      to {
        transform: translateY(-2000px);
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 60px;
  margin: 0px calc((100% - 1280px) / 2);

  .bg-box {
    position: absolute;
    width: 40%;
    top: 15%;
    left: 0;
    animation: bg 4s ease-in-out infinite;

    img {
      width: 100%;
      min-width: 300px;
    }

    @keyframes bg {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .man-box {
    position: absolute;
    width: 30%;
    top: 10%;
    left: 7%;
    animation: man 4s ease-in-out infinite;

    img {
      max-width: 400px;
      min-width: 300px;
      width: 100%;
    }

    @media (max-width: 960px) {
      left: 5%;
    }

    @keyframes man {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-30px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .art1-box {
    position: absolute;
    right: 0;
    bottom: 10%;
    width: 20%;
    animation: man 7s ease-in-out infinite;

    img {
      width: 100%;
    }
  }

  .art2-box {
    position: absolute;
    right: 10%;
    animation: man 10s ease-in-out infinite;
    top: 15%;
    width: 30%;
    img {
      width: 100%;
    }
  }

  .text-bg {
    display: none;

    @media (max-width: 960px) {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      z-index: 100;
      font-size: 200px;
      font-weight: bold;
      text-shadow: #4412e7 1px 1px, #4412e7 0px 0px, #4412e7 1px 1px,
        #4412e7 2px 2px, #4412e7 3px 3px, #4412e7 4px 4px, #4412e7 5px 5px,
        #4412e7 6px 6px, #4412e7 7px 7px, #4412e7 8px 8px, #4412e7 9px 9px,
        #4412e7 10px 10px, #4412e7 11px 11px, #4412e7 12px 12px,
        #8217f3 13px 13px, #8217f3 14px 14px, #8217f3 15px 15px,
        #8217f3 16px 16px, #8217f3 17px 17px, #8217f3 18px 18px,
        #8217f3 19px 19px, #8217f3 20px 20px, #8217f3 21px 21px;

      @media (max-width: 768px) {
        font-size: 70px;
      }
    }

    .content {
      margin-top: 24px;
      line-height: 30px;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 13rem;
      height: 3rem;
      background-size: 300% 300%;
      backdrop-filter: blur(1rem);
      border-radius: 5rem;
      transition: 0.5s;
      animation: gradient_301 5s ease infinite;
      border: double 4px transparent;
      background-image: linear-gradient(#212121, #212121),
        linear-gradient(137.48deg, #8f51ea 10%, #4412e7 87%);
      background-origin: border-box;
      background-clip: content-box, border-box;
      cursor: pointer;
    }

    #container-stars {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: 0.5s;
      backdrop-filter: blur(1rem);
      border-radius: 5rem;
    }

    strong {
      z-index: 2;
      font-family: 'Pretendard';
      font-size: 15px;
      letter-spacing: 5px;
      font-weight: 500;
      color: #ffffff;
    }

    #glow {
      position: absolute;
      display: flex;
      width: 12rem;
    }

    .circle {
      width: 100%;
      height: 30px;
      filter: blur(2rem);
      animation: pulse_3011 4s infinite;
      z-index: -1;
    }

    .circle:nth-of-type(1) {
      background: rgba(254, 83, 186, 0.636);
    }

    .circle:nth-of-type(2) {
      background: rgba(142, 81, 234, 0.704);
    }

    .btn:hover #container-stars {
      z-index: 1;
      background-color: #212121;
    }

    .btn:hover {
      transform: scale(1.1);
    }

    .btn:active {
      border: double 4px #fe53bb;
      background-origin: border-box;
      background-clip: content-box, border-box;
      animation: none;
    }

    .btn:active .circle {
      background: #fe53bb;
    }

    #stars {
      position: relative;
      background: transparent;
      width: 200rem;
      height: 200rem;
    }

    #stars::after {
      content: '';
      position: absolute;
      top: -10rem;
      left: -100rem;
      width: 100%;
      height: 100%;
      animation: animStarRotate 90s linear infinite;
    }

    #stars::after {
      background-image: radial-gradient(#ffffff 1px, transparent 1%);
      background-size: 50px 50px;
    }

    #stars::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      width: 170%;
      height: 500%;
      animation: animStar 60s linear infinite;
    }

    #stars::before {
      background-image: radial-gradient(#ffffff 1px, transparent 1%);
      background-size: 50px 50px;
      opacity: 0.5;
    }

    @keyframes animStar {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(-135rem);
      }
    }

    @keyframes animStarRotate {
      from {
        transform: rotate(360deg);
      }

      to {
        transform: rotate(0);
      }
    }

    @keyframes gradient_301 {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes pulse_3011 {
      0% {
        transform: scale(0.75);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.75);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  }
`;