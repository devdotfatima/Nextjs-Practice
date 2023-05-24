import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-8">
      <div className="bg-gradient-to-b from-indigo-100 dark:from-gray-800    ">
        <h1 className="p-4 mt-10 text-4xl font-bold mx-auto font-sans text-center md:w-1/2 md:text-5xl ">
          Lorem ipsum dolor sit amet{" "}
          <span className="text-purple-500">Genmataotion.</span>
        </h1>
      </div>

      <p className=" mt-0 sm:w-1/2 sm:text-xl text-gray-700 dark:text-gray-200 text-md mx-auto font-sans text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        placeat quae quibusdam temporibus optio delectus iste, aut sunt? Rem
        maxime dolorum qui reiciendis eius porro nisi molestiae laudantium illum
        numquam.
      </p>
      <div className=" flex flex-col gap-3 sm:flex sm:flex-row sm:justify-center">
        <button className="sm:w-1/6 rounded-full bg-purple-700 p-2 ml-3 mr-3 text-white font-bold">
          Get Started
        </button>
        <button className=" sm:w-1/6 rounded-full bg-purple-100 p-2 sm:p-0  ml-3 mr-3 font-bold text-purple-700 ">
          Learn More
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 ml-10 mr-10 ">
        <svg
          viewBox="0 -201 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M511.873981,49.436472 L511.873981,40.434383 L500.695,40.434383 L500.695,26.4391799 L500.318725,26.5549246 L489.818739,29.7673037 L489.612008,29.8304371 L489.612008,40.434383 L473.039474,40.434383 L473.039474,34.5276905 C473.039474,31.7770522 473.654716,29.6719845 474.866631,28.2681934 C476.070499,26.8811141 477.792433,26.1761238 479.987868,26.1761238 C481.566824,26.1761238 483.201485,26.5481161 484.84605,27.2815783 L485.258275,27.4654081 L485.258275,17.9848665 L485.064542,17.9136867 C483.530151,17.3621973 481.442414,17.0842863 478.855799,17.0842863 C475.595141,17.0842863 472.632201,17.7936093 470.048681,19.1998762 C467.463304,20.608 465.429416,22.6183675 464.005199,25.1746538 C462.585315,27.7278453 461.864851,30.6765493 461.864851,33.9396828 L461.864851,40.434383 L454.080867,40.434383 L454.080867,49.436472 L461.864851,49.436472 L461.864851,87.3604952 L473.039474,87.3604952 L473.039474,49.436472 L489.612008,49.436472 L489.612008,73.5367427 C489.612008,83.4623133 494.293787,88.4925648 503.526747,88.4925648 C505.044426,88.4925648 506.640737,88.3143056 508.27166,87.9658337 C509.931104,87.6086963 511.061317,87.251559 511.726669,86.8702824 L511.873981,86.7836286 L511.873981,77.6979807 L511.419667,77.998793 C510.813091,78.4035899 510.057965,78.7334932 509.172265,78.9785996 C508.282801,79.2286576 507.540054,79.3543056 506.965069,79.3543056 C504.801795,79.3543056 503.20182,78.7712495 502.208371,77.6212302 C501.204426,76.4606886 500.69505,74.4305145 500.69505,71.5913656 L500.69505,49.436472 L511.873981,49.436472 L511.873981,49.436472 Z M429.12619,79.3551721 C425.070174,79.3551721 421.87265,78.0101818 419.619033,75.3610522 C417.351799,72.6983056 416.203017,68.9022515 416.203017,64.0793501 C416.203017,59.1035667 417.351799,55.2090986 419.620271,52.4993114 C421.875126,49.8074739 425.042321,48.4414391 429.035203,48.4414391 C432.909865,48.4414391 435.99412,49.7461973 438.203172,52.3216712 C440.423985,54.9101431 441.550484,58.7736634 441.550484,63.8076286 C441.550484,68.9034894 440.490832,72.817764 438.401238,75.4359458 C436.326499,78.03494 433.206344,79.3551721 429.12619,79.3551721 L429.12619,79.3551721 Z M429.62383,39.3037988 C421.885648,39.3037988 415.73942,41.5710329 411.357834,46.0429865 C406.978723,50.515559 404.757911,56.7044952 404.757911,64.4402012 C404.757911,71.7872031 406.925493,77.6969903 411.200619,82.0024449 C415.475745,86.3097563 421.293926,88.4915745 428.49176,88.4915745 C435.992882,88.4915745 442.016557,86.1927737 446.396905,81.6589246 C450.776634,77.1294081 452.99559,70.9992727 452.99559,63.4443017 C452.99559,55.9821741 450.913424,50.028441 446.804797,45.7514584 C442.694313,41.472619 436.91265,39.3037988 429.62383,39.3037988 L429.62383,39.3037988 Z M386.741042,39.3035513 C381.477444,39.3035513 377.123711,40.6497795 373.797444,43.3044797 C370.451371,45.9746538 368.754195,49.477323 368.754195,53.7153114 C368.754195,55.9181741 369.120616,57.8753114 369.8417,59.5347311 C370.567116,61.2003404 371.689901,62.6660271 373.180965,63.8965106 C374.661506,65.1170909 376.945452,66.395853 379.973382,67.6962785 C382.517909,68.7435513 384.416245,69.6298956 385.62197,70.3280774 C386.800462,71.0120232 387.63729,71.7003017 388.109553,72.3700116 C388.568199,73.0254855 388.801545,73.922352 388.801545,75.0302824 C388.801545,78.1826228 386.440849,79.7163946 381.582667,79.7163946 C379.780887,79.7163946 377.725336,79.3406886 375.473576,78.5985609 C373.220578,77.8576712 371.11551,76.7924487 369.217792,75.4264139 L368.754195,75.0940348 L368.754195,85.8521006 L368.924408,85.9313269 C370.505839,86.6610754 372.498876,87.2763172 374.848431,87.7609594 C377.193653,88.2456015 379.324098,88.4925648 381.175394,88.4925648 C386.887116,88.4925648 391.486574,87.139528 394.842551,84.469354 C398.220191,81.7806112 399.932222,78.1956209 399.932222,73.8103211 C399.932222,70.6474584 399.010597,67.9345764 397.193963,65.7471876 C395.390326,63.5771296 392.259649,61.5853308 387.892299,59.8244023 C384.41315,58.4280387 382.184292,57.268735 381.265143,56.3792959 C380.378798,55.5195667 379.928818,54.3039381 379.928818,52.7645957 C379.928818,51.3997988 380.484021,50.3067234 381.624756,49.4209981 C382.774156,48.53094 384.373537,48.0784836 386.380191,48.0784836 C388.242009,48.0784836 390.147154,48.3724874 392.041158,48.948735 C393.934543,49.5249826 395.597057,50.2968201 396.985375,51.2413462 L397.441545,51.5532998 L397.441545,41.3479613 L397.266381,41.2724487 C395.985762,40.7234352 394.297251,40.253648 392.246651,39.8723714 C390.204098,39.4948085 388.351564,39.3035513 386.741042,39.3035513 L386.741042,39.3035513 Z M339.622435,79.3551721 C335.567657,79.3551721 332.368895,78.0101818 330.115897,75.3610522 C327.848044,72.6983056 326.701119,68.9034894 326.701119,64.0793501 C326.701119,59.1035667 327.849282,55.2090986 330.118373,52.4993114 C332.371371,49.8074739 335.537947,48.4414391 339.532686,48.4414391 C343.40611,48.4414391 346.490365,49.7461973 348.700036,52.3216712 C350.920849,54.9101431 352.047348,58.7736634 352.047348,63.8076286 C352.047348,68.9034894 350.987077,72.817764 348.897483,75.4359458 C346.822744,78.03494 343.703827,79.3551721 339.622435,79.3551721 L339.622435,79.3551721 Z M340.121313,39.3037988 C332.381274,39.3037988 326.235046,41.5710329 321.855317,46.0429865 C317.476206,50.515559 315.254156,56.7044952 315.254156,64.4402012 C315.254156,71.7902979 317.422976,77.6969903 321.698102,82.0024449 C325.973228,86.3097563 331.790791,88.4915745 338.989243,88.4915745 C346.488508,88.4915745 352.51404,86.1927737 356.894388,81.6589246 C361.27288,77.1294081 363.493073,70.9992727 363.493073,63.4443017 C363.493073,55.9821741 361.410288,50.028441 357.301042,45.7514584 C353.189321,41.472619 347.408895,39.3037988 340.121313,39.3037988 L340.121313,39.3037988 Z M298.291433,48.5606499 L298.291433,40.434383 L287.25298,40.434383 L287.25298,87.3592573 L298.291433,87.3592573 L298.291433,63.3555435 C298.291433,59.2735319 299.216771,55.9206499 301.04269,53.3878839 C302.845707,50.8854468 305.248493,49.617207 308.181723,49.617207 C309.175765,49.617207 310.291742,49.7812302 311.500562,50.1055629 C312.697003,50.4280387 313.563541,50.7777485 314.074798,51.1460271 L314.538396,51.4821199 L314.538396,40.3539188 L314.359518,40.2771683 C313.331433,39.8401857 311.877506,39.6198375 310.037351,39.6198375 C307.263812,39.6198375 304.781181,40.5111335 302.655069,42.2658723 C300.788918,43.8083095 299.439595,45.9232805 298.408415,48.5606499 L298.291433,48.5606499 L298.291433,48.5606499 Z M267.48571,39.3035513 C262.422035,39.3035513 257.904897,40.3898182 254.062422,42.5301663 C250.212518,44.6754662 247.235342,47.738677 245.209501,51.633764 C243.192944,55.5195667 242.169191,60.0583675 242.169191,65.1195667 C242.169191,69.5531451 243.161996,73.6221586 245.124085,77.2077679 C247.087412,80.7995667 249.866522,83.6096248 253.384046,85.5587157 C256.896619,87.5053308 260.956348,88.4925648 265.451203,88.4925648 C270.696851,88.4925648 275.175613,87.4434352 278.766793,85.3755048 L278.911629,85.2919458 L278.911629,75.1794507 L278.448031,75.5180193 C276.821416,76.7027002 275.003544,77.6484642 273.047644,78.3299342 C271.096696,79.0107853 269.317818,79.3549246 267.758669,79.3549246 C263.427219,79.3549246 259.950545,77.999412 257.426445,75.328 C254.896774,72.6522553 253.614298,68.8958143 253.614298,64.1682321 C253.614298,59.41094 254.951861,55.557942 257.587992,52.7144603 C260.215458,49.8796441 263.69894,48.4418104 267.940642,48.4418104 C271.568959,48.4418104 275.104433,49.6704371 278.449269,52.0967427 L278.911629,52.4328356 L278.911629,41.7775164 L278.76246,41.6933385 C277.503505,40.9889671 275.787141,40.4071489 273.655458,39.9658337 C271.533679,39.5257563 269.458321,39.3035513 267.48571,39.3035513 L267.48571,39.3035513 Z M234.566809,40.4345068 L223.528356,40.4345068 L223.528356,87.359381 L234.566809,87.359381 L234.566809,40.4345068 L234.566809,40.4345068 Z M229.160232,20.4441006 C227.343598,20.4441006 225.759072,21.0624371 224.457408,22.2879691 C223.150174,23.5172147 222.486654,25.0646035 222.486654,26.8905222 C222.486654,28.6879691 223.142128,30.2068859 224.436364,31.4033269 C225.722553,32.5960542 227.312031,33.2007737 229.160232,33.2007737 C231.007814,33.2007737 232.603482,32.5960542 233.905145,31.4051838 C235.215474,30.2068859 235.879613,28.6879691 235.879613,26.8905222 C235.879613,25.1283559 235.233424,23.596441 233.958994,22.3374855 C232.686422,21.0810058 231.071567,20.4441006 229.160232,20.4441006 L229.160232,20.4441006 Z M201.619247,36.972441 L201.619247,87.3591335 L212.884237,87.3591335 L212.884237,21.8810677 L197.293367,21.8810677 L177.475649,70.5161161 L158.244083,21.8810677 L142.018164,21.8810677 L142.018164,87.3591335 L152.60416,87.3591335 L152.60416,36.9674894 L152.968106,36.9674894 L173.276036,87.3591335 L181.264895,87.3591335 L201.25592,36.972441 L201.619247,36.972441 L201.619247,36.972441 Z"
                fill="#706D6E"
              >
                {" "}
              </path>{" "}
              <path
                d="M51.9266538,51.9266538 L0,51.9266538 L0,0 L51.9266538,0 L51.9266538,51.9266538 L51.9266538,51.9266538 Z"
                fill="#6a6462"
              >
                {" "}
              </path>{" "}
              <path
                d="M109.259884,51.9266538 L57.3338491,51.9266538 L57.3338491,0 L109.259884,0 L109.259884,51.9266538 L109.259884,51.9266538 Z"
                fill="#949692"
              >
                {" "}
              </path>{" "}
              <path
                d="M51.9254159,109.280309 L0,109.280309 L0,57.3536557 L51.9254159,57.3536557 L51.9254159,109.280309 L51.9254159,109.280309 Z"
                fill="#74797b"
              >
                {" "}
              </path>{" "}
              <path
                d="M109.259884,109.280309 L57.3338491,109.280309 L57.3338491,57.3536557 L109.259884,57.3536557 L109.259884,109.280309 L109.259884,109.280309 Z"
                fill="#c1bcae"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>

        <svg
          className=" p-7 ml-auto  "
          viewBox="-10 0 276 276"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M238.04054,223.122821 C236.10911,237.466648 226.457473,249.879044 212.942976,255.395053 C206.322113,258.150302 199.152955,258.979632 191.981042,258.150302 C185.087409,257.323727 178.19102,255.116773 171.021862,250.983899 C161.091945,245.46238 151.162028,236.915598 139.578961,224.227676 C157.782891,201.888117 168.812153,181.477232 172.950537,163.278812 C174.881966,154.726519 175.157491,147.003556 174.330917,139.831643 C173.228817,132.93801 170.746338,126.592672 166.883478,121.076663 C158.333941,108.667021 143.99287,101.495108 127.995894,101.495108 C111.998918,101.495108 97.6578467,108.942546 89.108309,121.076663 C85.2454499,126.592672 82.7657258,132.93801 81.6608709,139.831643 C80.5587713,147.003556 80.8342962,155.002044 83.0412507,163.278812 C87.1768794,181.477232 98.4844214,202.163642 116.412827,224.500446 C105.105285,237.191123 94.8998425,245.74066 84.969925,251.256669 C77.800767,255.395053 70.9043787,257.602007 64.0107457,258.425827 C56.5633076,259.255157 49.3913943,258.150302 43.0488111,255.670578 C29.5343146,250.154569 19.8826773,237.739417 17.9512477,223.398346 C17.124673,216.504713 17.6757228,209.61108 20.4337271,201.888117 C21.2603018,199.127357 22.6406816,196.374864 24.0183061,193.063054 C25.9497357,188.651901 28.1566901,183.959712 30.3608893,179.270278 L30.6391695,178.721983 C49.6669192,137.624689 70.077804,95.7035748 91.3152635,54.8873158 L92.1418382,53.2286559 C94.3487927,49.0957823 96.5529919,44.6846287 98.7627016,40.5462446 C100.966901,36.1323357 103.44938,31.9939517 106.482909,28.4066174 C112.274443,21.785754 119.997406,18.201175 128.546944,18.201175 C137.096481,18.201175 144.819444,21.785754 150.610978,28.4066174 C153.644507,31.9939517 156.126986,36.1323357 158.333941,40.5462446 C160.540895,44.6846287 162.745094,49.0957823 164.952049,53.2286559 L165.781379,54.8873158 C186.740558,95.9790997 207.151443,137.900214 226.181948,178.997508 L226.181948,179.270278 C228.388902,183.684187 230.317577,188.651901 232.524531,193.063054 C233.904911,196.374864 235.282535,199.127357 236.10911,201.888117 C238.316065,209.057275 239.142639,215.956418 238.04054,223.122821 L238.04054,223.122821 Z M127.995894,210.159374 C113.103773,191.40715 103.44938,173.754269 100.140326,158.864903 C98.7627016,152.519565 98.4844214,147.003556 99.3137514,142.038598 C99.8648012,137.624689 101.520706,133.76183 103.724905,130.45002 C108.965389,123.010848 117.790451,118.313148 127.995894,118.313148 C138.201336,118.313148 147.301924,122.729812 152.266882,130.45002 C154.471082,133.76183 156.126986,137.624689 156.678036,142.038598 C157.504611,147.003556 157.229086,152.79509 155.851461,158.864903 C152.542407,173.481499 142.888015,191.131625 127.995894,210.159374 L127.995894,210.159374 Z M252.381611,195.818303 C251.003986,192.509249 249.623607,188.92467 248.245982,185.891141 C246.039028,180.928938 243.832073,176.236749 241.900644,171.82284 L241.625119,171.55007 C222.597369,130.177251 202.186484,88.2561367 180.6735,46.8915831 L179.846925,45.2329232 C177.639971,41.0945392 175.433016,36.6806302 173.228817,32.2694766 C170.468057,27.3017626 167.710053,22.0667894 163.298899,17.0990754 C154.471082,6.06705835 141.785915,0 128.271419,0 C114.481397,0 102.071756,6.06705835 92.9684129,16.5507809 C88.8327841,21.5129844 85.7992549,26.753468 83.0412507,31.721182 C80.8342962,36.1323357 78.6273417,40.5462446 76.4203873,44.6846287 L75.5938126,46.3350228 C54.3591083,87.7050869 33.6726987,129.628956 14.6421937,170.99902 L14.3666688,171.55007 C12.4352392,175.961224 10.2282847,180.647902 8.02133027,185.615616 C6.64370576,188.651901 5.263326,191.960955 3.88570148,195.545534 C0.298367256,205.748221 -0.803732353,215.402613 0.573892159,225.329776 C3.61017658,246.016185 17.4001979,263.393541 36.4307029,271.113749 C43.5998609,274.150033 51.047299,275.527658 58.770262,275.527658 C60.9772165,275.527658 63.7352208,275.252133 65.9421752,274.973852 C75.0427628,273.868998 84.4188752,270.840979 93.5194627,265.59774 C104.82976,259.255157 115.586252,250.154569 127.720369,236.915598 C139.854486,250.154569 150.886503,259.255157 161.91852,265.59774 C171.021862,270.840979 180.397975,273.868998 189.498562,274.973852 C191.705517,275.252133 194.463521,275.527658 196.670476,275.527658 C204.393439,275.527658 212.113646,274.150033 219.010035,271.113749 C238.316065,263.393541 251.830561,245.74066 254.86409,225.329776 C257.071045,215.675383 255.96619,206.026501 252.381611,195.818303 L252.381611,195.818303 Z"
                fill="#847576"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>

        <svg
          className=" p-5 "
          viewBox="0 -51.5 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M72.392053,55.4384106 C72.392053,58.5748344 72.7311258,61.1178808 73.3245033,62.9827815 C74.002649,64.8476821 74.8503311,66.8821192 76.0370861,69.0860927 C76.4609272,69.7642384 76.6304636,70.4423841 76.6304636,71.0357616 C76.6304636,71.8834437 76.1218543,72.7311258 75.0198675,73.5788079 L69.6794702,77.1390728 C68.9165563,77.6476821 68.1536424,77.9019868 67.4754967,77.9019868 C66.6278146,77.9019868 65.7801325,77.4781457 64.9324503,76.7152318 C63.7456954,75.4437086 62.7284768,74.0874172 61.8807947,72.7311258 C61.0331126,71.2900662 60.1854305,69.6794702 59.2529801,67.7298013 C52.6410596,75.5284768 44.3337748,79.4278146 34.3311258,79.4278146 C27.210596,79.4278146 21.5311258,77.3933775 17.3774834,73.3245033 C13.2238411,69.2556291 11.1046358,63.8304636 11.1046358,57.0490066 C11.1046358,49.8437086 13.6476821,43.994702 18.818543,39.586755 C23.989404,35.1788079 30.8556291,32.9748344 39.586755,32.9748344 C42.4688742,32.9748344 45.4357616,33.2291391 48.5721854,33.6529801 C51.7086093,34.0768212 54.9298013,34.7549669 58.3205298,35.5178808 L58.3205298,29.3298013 C58.3205298,22.8874172 56.9642384,18.394702 54.3364238,15.7668874 C51.6238411,13.1390728 47.0463576,11.8675497 40.5192053,11.8675497 C37.5523179,11.8675497 34.5006623,12.2066225 31.3642384,12.9695364 C28.2278146,13.7324503 25.1761589,14.6649007 22.2092715,15.8516556 C20.8529801,16.4450331 19.8357616,16.784106 19.2423841,16.9536424 C18.6490066,17.1231788 18.2251656,17.207947 17.8860927,17.207947 C16.6993377,17.207947 16.1059603,16.3602649 16.1059603,14.5801325 L16.1059603,10.4264901 C16.1059603,9.07019868 16.2754967,8.05298013 16.6993377,7.45960265 C17.1231788,6.86622517 17.8860927,6.27284768 19.0728477,5.6794702 C22.0397351,4.15364238 25.6,2.88211921 29.7536424,1.86490066 C33.9072848,0.762913907 38.3152318,0.254304636 42.9774834,0.254304636 C53.0649007,0.254304636 60.4397351,2.54304636 65.186755,7.1205298 C69.8490066,11.6980132 72.2225166,18.6490066 72.2225166,27.9735099 L72.2225166,55.4384106 L72.392053,55.4384106 Z M37.9761589,68.3231788 C40.7735099,68.3231788 43.6556291,67.8145695 46.7072848,66.797351 C49.7589404,65.7801325 52.4715232,63.9152318 54.7602649,61.3721854 C56.1165563,59.7615894 57.1337748,57.981457 57.6423841,55.9470199 C58.1509934,53.9125828 58.4900662,51.4543046 58.4900662,48.5721854 L58.4900662,45.0119205 C56.0317881,44.418543 53.4039735,43.9099338 50.6913907,43.5708609 C47.9788079,43.2317881 45.3509934,43.0622517 42.7231788,43.0622517 C37.0437086,43.0622517 32.8900662,44.1642384 30.0927152,46.4529801 C27.2953642,48.7417219 25.9390728,51.9629139 25.9390728,56.2013245 C25.9390728,60.1854305 26.9562914,63.1523179 29.0754967,65.186755 C31.1099338,67.3059603 34.0768212,68.3231788 37.9761589,68.3231788 Z M106.045033,77.4781457 C104.519205,77.4781457 103.501987,77.2238411 102.823841,76.6304636 C102.145695,76.1218543 101.552318,74.9350993 101.043709,73.3245033 L81.1231788,7.7986755 C80.6145695,6.10331126 80.3602649,5.0013245 80.3602649,4.40794702 C80.3602649,3.05165563 81.0384106,2.28874172 82.394702,2.28874172 L90.7019868,2.28874172 C92.3125828,2.28874172 93.4145695,2.54304636 94.007947,3.13642384 C94.6860927,3.64503311 95.194702,4.83178808 95.7033113,6.44238411 L109.944371,62.5589404 L123.168212,6.44238411 C123.592053,4.74701987 124.100662,3.64503311 124.778808,3.13642384 C125.456954,2.62781457 126.643709,2.28874172 128.169536,2.28874172 L134.950993,2.28874172 C136.561589,2.28874172 137.663576,2.54304636 138.341722,3.13642384 C139.019868,3.64503311 139.613245,4.83178808 139.952318,6.44238411 L153.345695,63.2370861 L168.010596,6.44238411 C168.519205,4.74701987 169.112583,3.64503311 169.70596,3.13642384 C170.384106,2.62781457 171.486093,2.28874172 173.011921,2.28874172 L180.895364,2.28874172 C182.251656,2.28874172 183.01457,2.96688742 183.01457,4.40794702 C183.01457,4.83178808 182.929801,5.25562914 182.845033,5.76423841 C182.760265,6.27284768 182.590728,6.95099338 182.251656,7.88344371 L161.822517,73.4092715 C161.313907,75.1046358 160.72053,76.2066225 160.042384,76.7152318 C159.364238,77.2238411 158.262252,77.5629139 156.821192,77.5629139 L149.531126,77.5629139 C147.92053,77.5629139 146.818543,77.3086093 146.140397,76.7152318 C145.462252,76.1218543 144.868874,75.0198675 144.529801,73.3245033 L131.390728,18.6490066 L118.336424,73.2397351 C117.912583,74.9350993 117.403974,76.0370861 116.725828,76.6304636 C116.047682,77.2238411 114.860927,77.4781457 113.335099,77.4781457 L106.045033,77.4781457 Z M214.972185,79.7668874 C210.564238,79.7668874 206.156291,79.2582781 201.917881,78.2410596 C197.67947,77.2238411 194.37351,76.1218543 192.169536,74.8503311 C190.813245,74.0874172 189.880795,73.2397351 189.541722,72.4768212 C189.202649,71.7139073 189.033113,70.8662252 189.033113,70.1033113 L189.033113,65.7801325 C189.033113,64 189.711258,63.1523179 190.982781,63.1523179 C191.491391,63.1523179 192,63.2370861 192.508609,63.4066225 C193.017219,63.5761589 193.780132,63.9152318 194.627815,64.2543046 C197.509934,65.5258278 200.646358,66.5430464 203.952318,67.2211921 C207.343046,67.8993377 210.649007,68.2384106 214.039735,68.2384106 C219.380132,68.2384106 223.533775,67.3059603 226.415894,65.4410596 C229.298013,63.5761589 230.823841,60.8635762 230.823841,57.3880795 C230.823841,55.0145695 230.060927,53.0649007 228.535099,51.4543046 C227.009272,49.8437086 224.127152,48.402649 219.97351,47.0463576 L207.682119,43.2317881 C201.49404,41.2821192 196.916556,38.4 194.119205,34.5854305 C191.321854,30.8556291 189.880795,26.7019868 189.880795,22.2940397 C189.880795,18.7337748 190.643709,15.597351 192.169536,12.8847682 C193.695364,10.1721854 195.729801,7.7986755 198.272848,5.93377483 C200.815894,3.98410596 203.698013,2.54304636 207.088742,1.52582781 C210.47947,0.508609272 214.039735,0.0847682119 217.769536,0.0847682119 C219.634437,0.0847682119 221.584106,0.169536424 223.449007,0.42384106 C225.398675,0.678145695 227.178808,1.01721854 228.95894,1.35629139 C230.654305,1.78013245 232.264901,2.20397351 233.790728,2.71258278 C235.316556,3.22119205 236.503311,3.72980132 237.350993,4.2384106 C238.537748,4.91655629 239.38543,5.59470199 239.89404,6.35761589 C240.402649,7.03576159 240.656954,7.96821192 240.656954,9.15496689 L240.656954,13.1390728 C240.656954,14.9192053 239.978808,15.8516556 238.707285,15.8516556 C238.029139,15.8516556 236.927152,15.5125828 235.486093,14.8344371 C230.654305,12.6304636 225.229139,11.5284768 219.210596,11.5284768 C214.378808,11.5284768 210.564238,12.2913907 207.936424,13.9019868 C205.308609,15.5125828 203.952318,17.9708609 203.952318,21.4463576 C203.952318,23.8198675 204.8,25.8543046 206.495364,27.4649007 C208.190728,29.0754967 211.327152,30.6860927 215.819868,32.1271523 L227.856954,35.9417219 C233.960265,37.8913907 238.368212,40.6039735 240.996026,44.0794702 C243.623841,47.5549669 244.895364,51.5390728 244.895364,55.9470199 C244.895364,59.592053 244.13245,62.8980132 242.691391,65.7801325 C241.165563,68.6622517 239.131126,71.205298 236.503311,73.2397351 C233.875497,75.3589404 230.739073,76.8847682 227.09404,77.986755 C223.27947,79.1735099 219.295364,79.7668874 214.972185,79.7668874 Z"
                fill="#252F3E"
                fill-rule="nonzero"
              >
                {" "}
              </path>{" "}
              <path
                d="M230.993377,120.964238 C203.104636,141.562914 162.58543,152.498013 127.745695,152.498013 C78.9192053,152.498013 34.9245033,134.442384 1.69536424,104.434437 C-0.932450331,102.060927 1.4410596,98.8397351 4.57748344,100.704636 C40.5192053,121.557616 84.8529801,134.188079 130.712583,134.188079 C161.65298,134.188079 195.645033,127.745695 226.924503,114.521854 C231.586755,112.402649 235.570861,117.57351 230.993377,120.964238 Z M242.606623,107.740397 C239.046358,103.162914 219.04106,105.536424 209.970861,106.638411 C207.258278,106.977483 206.834437,104.603974 209.292715,102.823841 C225.229139,91.6344371 251.422517,94.8556291 254.474172,98.5854305 C257.525828,102.4 253.62649,128.593377 238.707285,141.139073 C236.418543,143.088742 234.21457,142.071523 235.231788,139.528477 C238.622517,131.136424 246.166887,112.233113 242.606623,107.740397 Z"
                fill="#b3b1ad"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>

        <svg
          className="  p-5   "
          viewBox="0 -172 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M496.052455,102.672055 L510.255737,112.140909 C505.6459,118.931075 494.619668,130.580258 475.557368,130.580258 C451.885231,130.580258 434.255719,112.2655 434.255719,88.967133 C434.255719,64.1736841 452.072116,47.3540078 473.563925,47.3540078 C495.180323,47.3540078 505.77049,64.5474546 509.19672,73.8294242 L511.065574,78.5638516 L455.373756,101.613038 C459.609823,109.960581 466.213103,114.196648 475.557368,114.196648 C484.901633,114.196648 491.380323,109.586811 496.052455,102.672055 L496.052455,102.672055 Z M452.383592,87.6589359 L489.573765,72.2097517 C487.518026,67.0392586 481.413107,63.3638478 474.124581,63.3638478 C464.842612,63.3638478 451.947526,71.5868007 452.383592,87.6589359 L452.383592,87.6589359 Z"
                fill="#968888"
              >
                {" "}
              </path>{" "}
              <path
                d="M407.406531,4.93104632 L425.347519,4.93104632 L425.347519,126.780257 L407.406531,126.780257 L407.406531,4.93104632 L407.406531,4.93104632 Z"
                fill="#959796"
              >
                {" "}
              </path>{" "}
              <path
                d="M379.124557,50.5933528 L396.442594,50.5933528 L396.442594,124.599929 C396.442594,155.311412 378.314721,167.957316 356.885207,167.957316 C336.701596,167.957316 324.554051,154.376986 320.00651,143.350753 L335.891759,136.747473 C338.757334,143.537639 345.67209,151.573706 356.885207,151.573706 C370.652424,151.573706 379.124557,143.039278 379.124557,127.091732 L379.124557,121.111404 L378.501606,121.111404 C374.39013,126.095011 366.540947,130.580258 356.573731,130.580258 C335.767169,130.580258 316.704869,112.452385 316.704869,89.0917231 C316.704869,65.6064713 335.767169,47.2917126 356.573731,47.2917126 C366.478652,47.2917126 374.39013,51.7146646 378.501606,56.5736822 L379.124557,56.5736822 L379.124557,50.5933528 L379.124557,50.5933528 Z M380.370459,89.0917231 C380.370459,74.3900801 370.590128,63.6753233 358.131109,63.6753233 C345.547499,63.6753233 334.957333,74.3900801 334.957333,89.0917231 C334.957333,103.606481 345.547499,114.134352 358.131109,114.134352 C370.590128,114.196648 380.370459,103.606481 380.370459,89.0917231 L380.370459,89.0917231 Z"
                fill="#57595b"
              >
                {" "}
              </path>{" "}
              <path
                d="M218.21632,88.7802476 C218.21632,112.763861 199.527791,130.393373 176.603195,130.393373 C153.678599,130.393373 134.990069,112.701565 134.990069,88.7802476 C134.990069,64.6720448 153.678599,47.1048274 176.603195,47.1048274 C199.527791,47.1048274 218.21632,64.6720448 218.21632,88.7802476 L218.21632,88.7802476 Z M200.026151,88.7802476 C200.026151,73.8294242 189.186804,63.5507331 176.603195,63.5507331 C164.019585,63.5507331 153.180238,73.8294242 153.180238,88.7802476 C153.180238,103.606481 164.019585,114.009763 176.603195,114.009763 C189.186804,114.009763 200.026151,103.606481 200.026151,88.7802476 L200.026151,88.7802476 Z"
                fill="#968888"
              >
                {" "}
              </path>{" "}
              <path
                d="M309.104867,88.967133 C309.104867,112.950746 290.416338,130.580258 267.491742,130.580258 C244.567146,130.580258 225.878617,112.950746 225.878617,88.967133 C225.878617,64.8589302 244.567146,47.3540078 267.491742,47.3540078 C290.416338,47.3540078 309.104867,64.796635 309.104867,88.967133 L309.104867,88.967133 Z M290.852404,88.967133 C290.852404,74.0163095 280.013057,63.7376184 267.429447,63.7376184 C254.845837,63.7376184 244.00649,74.0163095 244.00649,88.967133 C244.00649,103.793366 254.845837,114.196648 267.429447,114.196648 C280.075352,114.196648 290.852404,103.731071 290.852404,88.967133 L290.852404,88.967133 Z"
                fill="#c0beb9"
              >
                {" "}
              </path>{" "}
              <path
                d="M66.5900525,112.327794 C40.4884066,112.327794 20.0556146,91.2720515 20.0556146,65.1704056 C20.0556146,39.0687598 40.4884066,18.0130168 66.5900525,18.0130168 C80.6687446,18.0130168 90.9474357,23.5572805 98.5474373,30.6589216 L111.068752,18.137607 C100.478585,7.98350613 86.3375984,0.258913997 66.5900525,0.258913997 C30.8326666,0.258913997 0.744134408,29.4130196 0.744134408,65.1704056 C0.744134408,100.927792 30.8326666,130.081897 66.5900525,130.081897 C85.9015328,130.081897 100.478585,123.727797 111.878588,111.891729 C123.590067,100.180251 127.203183,83.7343447 127.203183,70.4031939 C127.203183,66.2294223 126.704822,61.9310606 126.144166,58.7540106 L66.5900525,58.7540106 L66.5900525,76.0720477 L109.013014,76.0720477 C107.767112,86.9113947 104.340882,94.3245113 99.2949785,99.3704142 C93.1900592,105.537629 83.534319,112.327794 66.5900525,112.327794 L66.5900525,112.327794 L66.5900525,112.327794 Z"
                fill="#57595b"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>

        <svg
          className="  p-5   "
          viewBox="0 -187 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M340.657183,0 L340.657183,100.203061 C353.016406,100.778079 365.344207,101.473198 377.637095,102.293306 L377.637095,123.537553 C358.204486,122.242243 338.690182,121.253471 319.094879,120.57923 L319.094879,0 L340.657183,0 Z M512,0.0118710746 L483.922918,65.1060972 L511.993017,137.54371 L511.961595,137.557485 C503.784957,136.3909 495.597845,135.289637 487.386294,134.233936 L471.623048,93.5776798 L455.709676,130.459835 C448.168455,129.627123 440.61676,128.839275 433.047609,128.100899 L460.419447,64.6708546 L435.351871,0.0118710746 L458.677285,0.0118710746 L472.712335,36.1957639 L488.318473,0.0118710746 L512,0.0118710746 Z M245.093161,119.526252 L245.092462,0.0114869428 L305.282574,0.0114869428 L305.282574,21.4467074 L266.654767,21.4467074 L266.654767,49.2277266 L295.881884,49.2277266 L295.881884,70.4719734 L266.654767,70.4719734 L266.654767,119.521329 L245.093161,119.526252 Z M164.580156,21.448488 L164.579458,0.0103695593 L231.270382,0.0103695593 L231.270382,21.4469875 L208.705375,21.4469875 L208.705375,120.107799 C201.508397,120.296154 194.3191,120.519389 187.144466,120.790104 L187.144466,21.448488 L164.580156,21.448488 Z M90.8682168,126.966224 L90.8682168,0.0139657936 L150.758077,0.0139657936 L150.758077,21.4491862 L112.42703,21.4491862 L112.42703,50.4849807 C121.233151,50.3722116 133.754021,50.2444297 141.543822,50.2632828 L141.543822,71.5092753 C131.792954,71.388127 120.786264,71.6429923 112.42703,71.7264345 L112.42703,103.88974 C125.166805,102.887736 137.944984,102.011069 150.758077,101.270912 L150.758077,122.517253 C130.704017,123.672422 110.740031,125.160591 90.8682168,126.966224 Z M48.5710466,77.8540254 L48.5696502,0.0104745953 L70.1319549,0.0104745953 L70.1319549,128.968837 C62.2496338,129.779728 54.3823252,130.642465 46.5286328,131.553346 L21.5609083,59.8244682 L21.5609083,134.625696 C14.3597408,135.563565 7.17323695,136.54141 0,137.562338 L0,0.0118710746 L20.4911722,0.0118710746 L48.5710466,77.8540254 Z M395.425298,124.819071 L395.425298,124.819211 L395.425298,0.0120101224 L416.987603,0.0120101224 L416.987603,126.599777 C409.809478,125.960833 402.624371,125.369895 395.425298,124.819071 Z"
                fill="#494646"
                fill-rule="nonzero"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>

        <svg
          className="  p-5   "
          viewBox="0 -153.5 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#626060"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                d="M99.55552,190.060579 L99.55552,204.282819 L0,204.282819 L0,190.060579 L99.55552,190.060579 Z M255.1384,190.059939 C245.151671,199.241068 232.070596,204.31949 218.50496,204.282019 L218.50496,204.282019 L113.77792,204.141379 L113.77792,190.059939 Z M403.1664,190.059779 L398.2,204.282179 L393.2784,190.059779 L403.1664,190.059779 Z M355.55584,190.060579 L355.55584,204.282819 L284.44464,204.282819 L284.44464,190.060579 L355.55584,190.060579 Z M512,190.060579 L512,204.282819 L440.8888,204.282819 L440.8888,190.060579 L512,190.060579 Z M271.24672,162.908899 C270.026362,167.89787 268.099708,172.686973 265.52512,177.131139 L265.52512,177.131139 L113.77792,177.131139 L113.77792,162.908899 Z M412.6976,162.909379 L407.7056,177.131779 L388.7392,177.131779 L383.7472,162.909379 L412.6976,162.909379 Z M355.55584,162.908899 L355.55584,177.131139 L284.44464,177.131139 L284.44464,162.908899 L355.55584,162.908899 Z M512,162.908899 L512,177.131139 L440.8888,177.131139 L440.8888,162.908899 L512,162.908899 Z M99.55552,162.908899 L99.55552,177.131139 L0,177.131139 L0,162.908899 L99.55552,162.908899 Z M71.11104,135.757379 L71.11104,149.979779 L28.44432,149.979779 L28.44432,135.757379 L71.11104,135.757379 Z M184.88896,135.757379 L184.88896,149.979779 L142.22224,149.979779 L142.22224,135.757379 L184.88896,135.757379 Z M270.90576,135.757379 C272.166041,140.393192 272.805755,145.175711 272.80816,149.979779 L272.80816,149.979779 L224.96976,149.979779 L224.96976,135.757379 Z M422.2304,135.757379 L417.2368,149.979779 L379.208,149.979779 L374.2144,135.757379 L422.2304,135.757379 Z M355.55568,135.757379 L355.55568,149.979779 L312.88896,149.979779 L312.88896,135.757379 L355.55568,135.757379 Z M483.55552,135.757379 L483.55552,149.979779 L440.8888,149.979779 L440.8888,135.757379 L483.55552,135.757379 Z M71.11104,108.606019 L71.11104,122.828259 L28.44432,122.828259 L28.44432,108.606019 L71.11104,108.606019 Z M355.55568,108.606019 L355.55568,122.828259 L312.88896,122.828259 L312.88896,108.606019 L355.55568,108.606019 Z M483.55552,108.606019 L483.55552,122.828259 L440.8888,122.828259 L440.8888,108.606019 L483.55552,108.606019 Z M253.64576,108.605379 C258.382421,112.634795 262.394807,117.444874 265.50928,122.827459 L265.50928,122.827459 L142.22176,122.827459 L142.22176,108.605379 Z M431.7616,108.605379 L426.7696,122.827779 L369.6752,122.827779 L364.6832,108.605379 L431.7616,108.605379 Z M394.224,81.4549786 L398.2224,92.9509786 L402.2192,81.4549786 L483.5552,81.4549786 L483.5552,95.6773786 L440.8896,95.6773786 L440.8896,82.6085786 L436.3008,95.6773786 L360.144,95.6773786 L355.5552,82.6069786 L355.5552,95.6773786 L312.8896,95.6773786 L312.8896,81.4549786 L394.224,81.4549786 Z M142.22224,81.4543386 L265.51024,81.4551386 C262.395586,86.8377816 258.383042,91.6479099 253.64624,95.6773786 L253.64624,95.6773786 L142.22224,95.6773786 L142.22224,81.4543386 Z M71.11104,81.4543386 L71.11104,95.6765786 L28.44432,95.6765786 L28.44432,81.4543386 L71.11104,81.4543386 Z M71.11104,54.3029786 L71.11104,68.5252186 L28.44432,68.5252186 L28.44432,54.3029786 L71.11104,54.3029786 Z M184.88896,54.3029786 L184.88896,68.5252186 L142.22224,68.5252186 L142.22224,54.3029786 L184.88896,54.3029786 Z M272.80816,54.3031386 C272.805733,59.1071522 272.166019,63.8896155 270.90576,68.5253786 L270.90576,68.5253786 L224.96976,68.5253786 L224.96976,54.3031386 Z M384.7824,54.3029786 L389.728,68.5253786 L312.8896,68.5253786 L312.8896,54.3029786 L384.7824,54.3029786 Z M483.5552,54.3029786 L483.5552,68.5253786 L406.7168,68.5253786 L411.6624,54.3029786 L483.5552,54.3029786 Z M99.55552,27.1514586 L99.55552,41.3736986 L0,41.3736986 L0,27.1514586 L99.55552,27.1514586 Z M265.52512,27.1514586 C268.099627,31.5955505 270.026276,36.3845354 271.24672,41.3733786 L271.24672,41.3733786 L113.77792,41.3733786 L113.77792,27.1514586 Z M512,27.1509786 L512,41.3733786 L416.1584,41.3733786 L421.104,27.1509786 L512,27.1509786 Z M375.3408,27.1509786 L380.2864,41.3733786 L284.4448,41.3733786 L284.4448,27.1509786 L375.3408,27.1509786 Z M99.55552,9.85716419e-05 L99.55552,14.2223386 L0,14.2223386 L0,9.85716419e-05 L99.55552,9.85716419e-05 Z M218.50496,4.91529226e-05 C232.066886,-0.0182214039 245.141087,5.05759937 255.13792,14.2221786 L255.13792,14.2221786 L113.77792,14.2221786 L113.77792,4.91529226e-05 Z M512,0.000578571642 L512,14.2229786 L425.6,14.2229786 L430.5456,0.000578571642 L512,0.000578571642 Z M365.8992,0.000578571642 L370.8448,14.2229786 L284.4448,14.2229786 L284.4448,0.000578571642 L365.8992,0.000578571642 Z"
                fill="#000000"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;