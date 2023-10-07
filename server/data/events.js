const eventData = [
  {
    id: 1,
    name: "Wage War - The manic tour",
    date: "2023-04-14",
    time: "18:00",
    location_id: "echolounge",
    img_url:
      "https://i.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAzLzkyNy9NSTAwMDM5Mjc0NzQuanBn?ops=fit%28720%2C720%29&sn=eGtleWJhc2UyMDIxMTExMDqm2K8BggbicsTUpP-JTJn0_bRirY1Pq4MDA9JWGShK7Q%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1a_Mcu6UO8d-F4oJzpZf1hcUbJr4aImxNgIE0PtyQxadxe4Q-6rk89SbLwAtA_SFhSEh34GrAjqgWN3fLl56y0tcWoio8-pUVqvi3GhJ9h536O1_mMwTbba_D4IWVbrXGygsBry7rrrFOlUJcpqYAyIYNhcyyhsr_0zbpFXdZyIOerasnuZqQmqFdo4-3ymEerM-NbTqKA_Xr8%3D",
  },
  {
    id: 2,
    name: "Spirit Box",
    date: "2023-04-21",
    time: "18:00",
    location_id: "echolounge",
    img_url: "https://i.scdn.co/image/ab6761610000e5eb9e6c14bd347a74387a544d05",
  },
  {
    id: 3,
    name: "Atreyu",
    date: "2023-05-12",
    time: "18:00",
    location_id: "echolounge",
    img_url: "https://i.scdn.co/image/ab6761610000e5eb95414338c072c7655e751bf1",
  },
  {
    id: 4,
    name: "Thrice",
    date: "2023-05-21",
    time: "19:00",
    location_id: "echolounge",
    img_url: "https://i.scdn.co/image/ab6761610000e5eb6a29072c320c99c245fe24e2",
  },
  {
    id: 5,
    name: "BadFlower: Asking for a friend",
    date: "2023-03-23",
    time: "19:00",
    location_id: "houseofblues",
    img_url: "https://bandwagmag.com/wp-content/uploads/2016/12/10-og.jpg",
  },
  {
    id: 6,
    name: "Coheed and Cambria",
    date: "2023-05-14",
    time: "19:00",
    location_id: "houseofblues",
    img_url: "https://i.scdn.co/image/ab6761610000e5ebe63ceef20dce0ac6522c4011",
  },
  {
    id: 7,
    name: "Yeah Yeah Yeahs",
    date: "2023-05-08",
    time: "20:00",
    location_id: "pavilion",
    img_url:
      "https://static01.nyt.com/images/2013/03/31/magazine/31kareno4/31kareno4-superJumbo-v3.jpg",
  },
  {
    id: 8,
    name: "Weezer",
    date: "2023-06-05",
    time: "19:00",
    location_id: "pavilion",
    img_url:
      "https://static.stereogum.com/uploads/2021/05/The-Green-Album-1620834349-scaled.jpeg",
  },
  {
    id: 9,
    name: "Sublime",
    date: "2023-07-22",
    time: "17:00",
    location_id: "pavilion",
    img_url:
      "https://merchbar.imgix.net/product/105/6519/4001755627602/ODAyiKAK85-1.png?quality=60&auto=compress,format&w=3840",
  },
  {
    id: 10,
    name: "Sad Summer Fest",
    date: "2023-07-24",
    time: "14:00",
    location_id: "pavilion",
    img_url:
      "https://assets.website-files.com/609075d36493a9d63653ead7/63c74cf342c0edb9de0a2826_SSF23_Website_MobileHeader.png",
  },
  {
    id: 11,
    name: "YellowCard",
    date: "2023-07-26",
    time: "19:00",
    location_id: "pavilion",
    img_url: "https://i.scdn.co/image/ab6761610000e5eb952381a70ceeda02554ad545",
  },
  {
    id: 12,
    name: "3 Doors Down",
    date: "2023-09-21",
    time: "20:00",
    location_id: "pavilion",
    img_url:
      "https://iscale.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAxLzQyNC9NSTAwMDE0MjQ2MjIuanBn?sn=eGtleWJhc2UyMDIxMTExMDphSZVnEbZI601pP9EVyn2A90BDJ-ywsJB8rBfscAFsLw%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1a_Mcu6UO8d-F4oJzpZf1hcUbJr4aImwtcNF1etywNP_1oJKogEYL8D0ME8UYugsQkDLVNvyjZJa2qfzHOJEJp1E0Yf3NxOs1Mle19qPSPRTjtTQ5DbuvopJrjegz0i8R1I8Cuz6fRvYzNCp-GXS03xkzVeZy-Vw8g03H5ZAuyDFQyrEdxqI4GC0qrmuOqi45rx6Q0%3D",
  },
  {
    id: 13,
    name: "Duran Duran",
    date: "2023-06-10",
    time: "19:00",
    location_id: "americanairlines",
    img_url: "https://static.stereogum.com/uploads/2015/09/duranduran.jpg",
  },
  {
    id: 14,
    name: "Madonna",
    date: "2023-09-18",
    time: "20:30",
    location_id: "americanairlines",
    img_url:
      "https://yt3.googleusercontent.com/T8Up4YxiN4wGfkyI6J8OyRbQNWiXWv8Lb-I-CjxE9Hi7DyFbcIShXW3i2TqqmXtECcaqlDXk1A=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 15,
    name: "Depeche Mode",
    date: "2023-10-01",
    time: "19:00",
    location_id: "americanairlines",
    img_url:
      "https://i.discogs.com/tiuVvZ5R0TWQDXYr4LabpmOOY_l123e7FoXOXk4y3ck/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI3MjUt/MTY2NTMzMzEyMS0z/OTk4LmpwZWc.jpeg",
  },
];

export default eventData;
