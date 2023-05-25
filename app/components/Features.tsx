import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div id="feature" className="bg-white dark:bg-slate-700 dark:text-white">
      {" "}
      <div className="m-8  flex flex-col gap-6 h-full  sm:p-10">
        <span className="text-2xl">✨</span>
        <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 sm:text-3xl sm:w-1/2">
          {" "}
          A technology-first approach to payments and finance
        </h2>
        <p className="text-mono text-lg text-slate-500 dark:text-gray-300  font-semibold sm:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugit vel aut delectus, ducimus esse iusto repellendus doloremque hic,
          laboriosam dolor unde eos. hic, laboriosam dolor unde eos.
        </p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-gray-200 border-2 rounded-3xl ">
          <FeatureCard
            icon="⏰"
            cardTitle="First Feature"
            description="
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            link="Read More"
          />
          <FeatureCard
            icon="⚓"
            cardTitle="Second Feature"
            description="
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            link="Read More"
          />{" "}
          <FeatureCard
            icon="🖋"
            cardTitle="Third Feature"
            description="
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            link="Read More"
          />{" "}
          <FeatureCard
            icon="🎓"
            cardTitle="More Features"
            description="
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
            link="Read More"
          />
        </div>
      </div>
      <div className="m-8  flex flex-col-reverse sm:flex-row gap-6 h-full  sm:p-10">
        <div className=" w-full sm:w-3/4 md:w-1/2 flex flex-col gap-6 h-full  ">
          <span className="text-2xl">🌀</span>
          <h2 className="text-xl font-bold text-gray-600 dark:text-gray-200 sm:text-3xl sm:w-3/4">
            {" "}
            Nuxt development is carried out by passionate developers
          </h2>
          <p className="text-mono text-lg text-slate-500 dark:text-gray-300 font-semibold sm:w-4/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fugit vel aut delectus, ducimus esse iusto repellendus doloremque
            hic, laboriosam dolor unde eos. hic, laboriosam dolor unde eos.
          </p>
          <div className="flex flex-row">
            <span className="p-3 bg-cyan-100 rounded-full text-2xl ">✉</span>
            <div className="flex flex-col ml-3">
              <h3 className="font-bold text-slate-600 dark:text-gray-300">
                Chat Anytime
              </h3>
              <p className="font-mono text-slate-400 dark:text-gray-400">
                Lorem ipsum dolor sit, amet elit.
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row">
            <span className="p-3 bg-cyan-100 rounded-full text-2xl">🗺</span>
            <div className="flex flex-col ml-3">
              <h3 className="font-bold text-slate-600 dark:text-gray-300">
                Real Time Location
              </h3>
              <p className="font-mono text-slate-400">
                Lorem ipsum dolor sit, amet elit.
              </p>
            </div>
          </div>
        </div>

        <svg
          className=" w-full sm:w-1/4 mb-auto mt-20 md:w-1/2 "
          viewBox="0 0 456 402"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M262.385 109.641H260.385V32.5977H405.042V34.5977H262.385V109.641Z"
            fill="#3F3D56"
          />
          <path
            d="M427.225 55.56C442.568 55.56 455.005 43.1225 455.005 27.78C455.005 12.4375 442.568 0 427.225 0C411.883 0 399.445 12.4375 399.445 27.78C399.445 43.1225 411.883 55.56 427.225 55.56Z"
            fill="#01FEE6"
          />
          <path
            d="M423.435 42.2376C422.956 42.2376 422.482 42.1259 422.053 41.9113C421.624 41.6967 421.251 41.3851 420.963 41.0013L413.385 30.896C413.141 30.5714 412.964 30.202 412.863 29.8089C412.763 29.4158 412.74 29.0067 412.798 28.605C412.855 28.2033 412.991 27.8168 413.198 27.4676C413.405 27.1184 413.678 26.8134 414.003 26.5699C414.327 26.3265 414.697 26.1493 415.09 26.0486C415.483 25.9479 415.892 25.9257 416.294 25.9831C416.696 26.0405 417.082 26.1764 417.431 26.3832C417.78 26.59 418.085 26.8635 418.329 27.1881L423.287 33.7987L436.022 14.6967C436.247 14.3587 436.536 14.0683 436.873 13.8421C437.211 13.6159 437.589 13.4585 437.987 13.3786C438.385 13.2988 438.795 13.2983 439.194 13.377C439.592 13.4557 439.971 13.6121 440.309 13.8374C440.647 14.0626 440.937 14.3522 441.163 14.6896C441.389 15.0271 441.546 15.4057 441.625 15.8039C441.705 16.2021 441.705 16.612 441.626 17.0103C441.547 17.4086 441.39 17.7874 441.164 18.125L426.007 40.8615C425.733 41.2726 425.364 41.6121 424.931 41.8514C424.499 42.0906 424.015 42.2227 423.521 42.2366C423.493 42.2371 423.464 42.2376 423.435 42.2376Z"
            fill="white"
          />
          <path
            d="M164.385 296.686H162.385V373.729H307.042V371.729H164.385V296.686Z"
            fill="#3F3D56"
          />
          <path
            d="M329.225 401.56C344.568 401.56 357.005 389.122 357.005 373.78C357.005 358.438 344.568 346 329.225 346C313.883 346 301.445 358.438 301.445 373.78C301.445 389.122 313.883 401.56 329.225 401.56Z"
            fill="#6C63FF"
          />
          <path
            d="M325.435 388.238C324.956 388.238 324.482 388.126 324.053 387.911C323.624 387.697 323.251 387.385 322.963 387.001L315.385 376.896C315.141 376.571 314.964 376.202 314.863 375.809C314.763 375.416 314.74 375.007 314.798 374.605C314.855 374.203 314.991 373.817 315.198 373.468C315.405 373.118 315.678 372.813 316.003 372.57C316.327 372.327 316.697 372.149 317.09 372.049C317.483 371.948 317.892 371.926 318.294 371.983C318.696 372.04 319.082 372.176 319.431 372.383C319.78 372.59 320.085 372.863 320.329 373.188L325.287 379.799L338.022 360.697C338.247 360.359 338.536 360.068 338.873 359.842C339.211 359.616 339.589 359.458 339.987 359.379C340.385 359.299 340.795 359.298 341.194 359.377C341.592 359.456 341.971 359.612 342.309 359.837C342.647 360.063 342.937 360.352 343.163 360.69C343.389 361.027 343.546 361.406 343.625 361.804C343.705 362.202 343.705 362.612 343.626 363.01C343.547 363.409 343.39 363.787 343.164 364.125L328.007 386.861C327.733 387.273 327.364 387.612 326.931 387.851C326.499 388.091 326.015 388.223 325.521 388.237C325.493 388.237 325.464 388.238 325.435 388.238Z"
            fill="white"
          />
          <path
            d="M83.6281 153.709C83.6114 138.677 89.3544 124.21 99.6764 113.282L64.2531 64.5269C62.7949 62.5182 60.921 60.8474 58.759 59.6281C56.597 58.4089 54.1976 57.6699 51.7242 57.4614C49.2509 57.253 46.7617 57.5799 44.4261 58.4201C42.0905 59.2602 39.9634 60.5938 38.1896 62.3301C26.055 74.159 16.4215 88.3059 9.86101 103.931C3.30056 119.555 -0.0529696 136.339 -0.000367198 153.285C-0.000268394 159.684 0.476815 166.075 1.42689 172.403C1.79961 174.905 2.71362 177.296 4.10518 179.408C5.49674 181.521 7.33236 183.304 9.48402 184.634C11.6114 185.951 14.0004 186.788 16.4844 187.086C18.9684 187.385 21.4876 187.138 23.8663 186.362L85.0319 166.488C84.101 162.292 83.6303 158.007 83.6281 153.709V153.709Z"
            fill="#F2F2F2"
          />
          <path
            d="M86.8814 173.027L23.2916 193.689C20.9382 194.45 18.7758 195.707 16.951 197.377C15.1262 199.046 13.6816 201.089 12.715 203.365C11.7485 205.642 11.2826 208.1 11.349 210.572C11.4154 213.045 12.0124 215.474 13.0997 217.695C22.1554 236.067 35.5046 251.987 52.0171 264.106C68.5296 276.226 87.7191 284.188 107.961 287.319C110.426 287.698 112.944 287.539 115.342 286.853C117.74 286.167 119.962 284.971 121.854 283.346C123.744 281.726 125.261 279.715 126.3 277.453C127.34 275.191 127.877 272.731 127.876 270.242V210.849C118.458 208.406 109.789 203.675 102.638 197.077C95.4863 190.479 90.0742 182.218 86.8814 173.027Z"
            fill="#E6E6E6"
          />
          <path
            d="M278.113 210.136C277.039 207.586 275.429 205.298 273.392 203.427C271.355 201.555 268.939 200.144 266.308 199.29L196.955 176.756C192.906 186.277 186.427 194.567 178.166 200.796C169.906 207.025 160.153 210.974 149.886 212.248V284.507C149.887 287.281 150.488 290.021 151.648 292.541C152.807 295.061 154.497 297.3 156.603 299.106C158.708 300.911 161.179 302.24 163.846 303.002C166.514 303.763 169.314 303.939 172.055 303.518C194.588 300.032 215.95 291.169 234.331 277.677C252.713 264.186 267.573 246.465 277.654 226.014C278.866 223.555 279.534 220.865 279.613 218.125C279.693 215.385 279.181 212.66 278.113 210.136Z"
            fill="#0E2F4E"
          />
          <path
            d="M260.882 44.3944C258.907 42.4615 256.539 40.9768 253.939 40.0415C251.339 39.1062 248.568 38.7421 245.815 38.9742C243.062 39.2062 240.391 40.0289 237.984 41.3862C235.577 42.7435 233.491 44.6036 231.868 46.8397L184.453 112.101C189.908 117.569 194.232 124.058 197.179 131.197C200.126 138.336 201.638 145.986 201.628 153.709C201.628 155.146 201.559 156.566 201.458 157.977L276.827 182.466C279.492 183.326 282.312 183.595 285.092 183.254C287.871 182.913 290.543 181.97 292.921 180.491C295.298 179.011 297.325 177.032 298.86 174.689C300.394 172.347 301.399 169.698 301.806 166.927C302.864 159.882 303.395 152.768 303.395 145.644C303.453 126.78 299.72 108.096 292.417 90.7033C285.114 73.3102 274.39 57.5621 260.882 44.3944V44.3944Z"
            fill="#0DCBFD"
          />
          <path
            d="M142.629 94.708C152.78 94.6965 162.76 97.3173 171.596 102.314L200.536 62.4819C202.011 60.4533 203.028 58.1288 203.518 55.6688C204.007 53.2087 203.957 50.6717 203.371 48.2329C202.803 45.8406 201.724 43.6 200.206 41.6656C198.688 39.7312 196.769 38.1493 194.58 37.0288C176.713 27.9419 156.956 23.1914 136.911 23.1622C116.865 23.1331 97.095 27.826 79.2012 36.8608C76.9446 37.9994 74.9625 39.615 73.3923 41.5957C71.8221 43.5763 70.7012 45.8747 70.1074 48.3315C69.5218 50.7533 69.4698 53.2734 69.9549 55.7173C70.44 58.1612 71.4508 60.4704 72.917 62.4848L105.747 107.672C116.2 99.2658 129.215 94.691 142.629 94.708V94.708Z"
            fill="#E6E6E6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Features;