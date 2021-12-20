import React from "react"

const sidebarData = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.38 5.95667L14.66 1.255C12.8283 -0.0283349 10.0167 0.0416653 8.25499 1.40667L2.40999 5.96833C1.24332 6.87833 0.321655 8.745 0.321655 10.215V18.265C0.321655 21.24 2.73665 23.6667 5.71166 23.6667H18.2883C21.2633 23.6667 23.6783 21.2517 23.6783 18.2767V10.3667C23.6783 8.79167 22.6633 6.855 21.38 5.95667ZM12.875 19C12.875 19.4783 12.4783 19.875 12 19.875C11.5217 19.875 11.125 19.4783 11.125 19V15.5C11.125 15.0217 11.5217 14.625 12 14.625C12.4783 14.625 12.875 15.0217 12.875 15.5V19Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="22"
        height="25"
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5416 3.15334V1.33334C16.5416 0.85501 16.145 0.458344 15.6666 0.458344C15.1883 0.458344 14.7916 0.85501 14.7916 1.33334V3.08334H7.20832V1.33334C7.20832 0.85501 6.81165 0.458344 6.33332 0.458344C5.85498 0.458344 5.45832 0.85501 5.45832 1.33334V3.15334C2.30832 3.44501 0.779983 5.32334 0.546649 8.11168C0.523316 8.45001 0.803316 8.73001 1.12998 8.73001H20.87C21.2083 8.73001 21.4883 8.43834 21.4533 8.11168C21.22 5.32334 19.6916 3.44501 16.5416 3.15334Z"
          fill="white"
        />
        <path
          d="M20.3333 10.48H1.66667C1.025 10.48 0.5 11.005 0.5 11.6467V18.8334C0.5 22.3334 2.25 24.6667 6.33333 24.6667H15.6667C19.75 24.6667 21.5 22.3334 21.5 18.8334V11.6467C21.5 11.005 20.975 10.48 20.3333 10.48ZM7.745 20.245C7.68667 20.2917 7.62833 20.35 7.57 20.385C7.5 20.4317 7.43 20.4667 7.36 20.49C7.29 20.525 7.22 20.5484 7.15 20.56C7.06833 20.5717 6.99833 20.5834 6.91667 20.5834C6.765 20.5834 6.61333 20.5484 6.47333 20.49C6.32167 20.4317 6.205 20.35 6.08833 20.245C5.87833 20.0234 5.75 19.72 5.75 19.4167C5.75 19.1134 5.87833 18.81 6.08833 18.5884C6.205 18.4834 6.32167 18.4017 6.47333 18.3434C6.68333 18.25 6.91667 18.2267 7.15 18.2734C7.22 18.285 7.29 18.3084 7.36 18.3434C7.43 18.3667 7.5 18.4017 7.57 18.4484C7.62833 18.495 7.68667 18.5417 7.745 18.5884C7.955 18.81 8.08333 19.1134 8.08333 19.4167C8.08333 19.72 7.955 20.0234 7.745 20.245ZM7.745 16.1617C7.52333 16.3717 7.22 16.5 6.91667 16.5C6.61333 16.5 6.31 16.3717 6.08833 16.1617C5.87833 15.94 5.75 15.6367 5.75 15.3334C5.75 15.03 5.87833 14.7267 6.08833 14.505C6.415 14.1784 6.92833 14.0734 7.36 14.26C7.51167 14.3184 7.64 14.4 7.745 14.505C7.955 14.7267 8.08333 15.03 8.08333 15.3334C8.08333 15.6367 7.955 15.94 7.745 16.1617ZM11.8283 20.245C11.6067 20.455 11.3033 20.5834 11 20.5834C10.6967 20.5834 10.3933 20.455 10.1717 20.245C9.96167 20.0234 9.83333 19.72 9.83333 19.4167C9.83333 19.1134 9.96167 18.81 10.1717 18.5884C10.6033 18.1567 11.3967 18.1567 11.8283 18.5884C12.0383 18.81 12.1667 19.1134 12.1667 19.4167C12.1667 19.72 12.0383 20.0234 11.8283 20.245ZM11.8283 16.1617C11.77 16.2084 11.7117 16.255 11.6533 16.3017C11.5833 16.3484 11.5133 16.3834 11.4433 16.4067C11.3733 16.4417 11.3033 16.465 11.2333 16.4767C11.1517 16.4884 11.0817 16.5 11 16.5C10.6967 16.5 10.3933 16.3717 10.1717 16.1617C9.96167 15.94 9.83333 15.6367 9.83333 15.3334C9.83333 15.03 9.96167 14.7267 10.1717 14.505C10.2767 14.4 10.405 14.3184 10.5567 14.26C10.9883 14.0734 11.5017 14.1784 11.8283 14.505C12.0383 14.7267 12.1667 15.03 12.1667 15.3334C12.1667 15.6367 12.0383 15.94 11.8283 16.1617ZM15.9117 20.245C15.69 20.455 15.3867 20.5834 15.0833 20.5834C14.78 20.5834 14.4767 20.455 14.255 20.245C14.045 20.0234 13.9167 19.72 13.9167 19.4167C13.9167 19.1134 14.045 18.81 14.255 18.5884C14.6867 18.1567 15.48 18.1567 15.9117 18.5884C16.1217 18.81 16.25 19.1134 16.25 19.4167C16.25 19.72 16.1217 20.0234 15.9117 20.245ZM15.9117 16.1617C15.8533 16.2084 15.795 16.255 15.7367 16.3017C15.6667 16.3484 15.5967 16.3834 15.5267 16.4067C15.4567 16.4417 15.3867 16.465 15.3167 16.4767C15.235 16.4884 15.1533 16.5 15.0833 16.5C14.78 16.5 14.4767 16.3717 14.255 16.1617C14.045 15.94 13.9167 15.6367 13.9167 15.3334C13.9167 15.03 14.045 14.7267 14.255 14.505C14.3717 14.4 14.4883 14.3184 14.64 14.26C14.85 14.1667 15.0833 14.1434 15.3167 14.19C15.3867 14.2017 15.4567 14.225 15.5267 14.26C15.5967 14.2834 15.6667 14.3184 15.7367 14.365C15.795 14.4117 15.8533 14.4584 15.9117 14.505C16.1217 14.7267 16.25 15.03 16.25 15.3334C16.25 15.6367 16.1217 15.94 15.9117 16.1617Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 2.33333C7.44331 2.33333 4.95831 4.81833 4.95831 7.875C4.95831 10.8733 7.30331 13.3 10.36 13.405C10.4533 13.3933 10.5466 13.3933 10.6166 13.405C10.64 13.405 10.6516 13.405 10.675 13.405C10.6866 13.405 10.6866 13.405 10.6983 13.405C13.685 13.3 16.03 10.8733 16.0416 7.875C16.0416 4.81833 13.5566 2.33333 10.5 2.33333Z"
          fill="white"
        />
        <path
          d="M16.4267 16.5083C13.1717 14.3383 7.86335 14.3383 4.58502 16.5083C3.10335 17.5 2.28668 18.8417 2.28668 20.2767C2.28668 21.7117 3.10335 23.0417 4.57335 24.0217C6.20668 25.1183 8.35335 25.6667 10.5 25.6667C12.6467 25.6667 14.7933 25.1183 16.4267 24.0217C17.8967 23.03 18.7134 21.7 18.7134 20.2533C18.7017 18.8183 17.8967 17.4883 16.4267 16.5083Z"
          fill="white"
        />
        <path
          d="M23.3217 8.56331C23.5083 10.8266 21.8983 12.81 19.67 13.0783C19.6583 13.0783 19.6583 13.0783 19.6467 13.0783H19.6117C19.5417 13.0783 19.4717 13.0783 19.4133 13.1016C18.2817 13.16 17.2433 12.7983 16.4617 12.1333C17.6633 11.06 18.3517 9.44997 18.2117 7.69997C18.13 6.75497 17.8033 5.89164 17.3133 5.15664C17.7567 4.93497 18.27 4.79497 18.795 4.74831C21.0817 4.54997 23.1233 6.25331 23.3217 8.56331Z"
          fill="white"
        />
        <path
          d="M25.655 19.355C25.5617 20.4867 24.8383 21.4667 23.625 22.1317C22.4583 22.7734 20.9883 23.0767 19.53 23.0417C20.37 22.2834 20.86 21.3384 20.9533 20.335C21.07 18.8884 20.3817 17.5 19.005 16.3917C18.2233 15.7734 17.3133 15.2834 16.3217 14.9217C18.9 14.175 22.1433 14.6767 24.1383 16.2867C25.2117 17.15 25.76 18.235 25.655 19.355Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8333 4.08334H8.16665C4.66665 4.08334 2.33331 5.83334 2.33331 9.91667V18.0833C2.33331 22.1667 4.66665 23.9167 8.16665 23.9167H19.8333C23.3333 23.9167 25.6666 22.1667 25.6666 18.0833V9.91667C25.6666 5.83334 23.3333 4.08334 19.8333 4.08334ZM20.3816 11.1883L16.73 14.105C15.96 14.7233 14.98 15.0267 14 15.0267C13.02 15.0267 12.0283 14.7233 11.27 14.105L7.61831 11.1883C7.24498 10.885 7.18665 10.325 7.47831 9.95167C7.78165 9.57834 8.32998 9.50834 8.70331 9.81167L12.355 12.7283C13.2416 13.44 14.7466 13.44 15.6333 12.7283L19.285 9.81167C19.6583 9.50834 20.2183 9.56667 20.51 9.95167C20.8133 10.325 20.755 10.885 20.3816 11.1883Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.45 10.7567C21.3383 10.7567 20.475 9.2634 21.525 7.43173C22.1316 6.37007 21.77 5.01673 20.7083 4.41007L18.69 3.25507C17.7683 2.70673 16.5783 3.0334 16.03 3.95507L15.9016 4.17673C14.8516 6.0084 13.125 6.0084 12.0633 4.17673L11.935 3.95507C11.41 3.0334 10.22 2.70673 9.29831 3.25507L7.27998 4.41007C6.21831 5.01673 5.85665 6.38173 6.46331 7.4434C7.52498 9.2634 6.66165 10.7567 4.54998 10.7567C3.33665 10.7567 2.33331 11.7484 2.33331 12.9734V15.0267C2.33331 16.2401 3.32498 17.2434 4.54998 17.2434C6.66165 17.2434 7.52498 18.7367 6.46331 20.5684C5.85665 21.6301 6.21831 22.9834 7.27998 23.5901L9.29831 24.7451C10.22 25.2934 11.41 24.9667 11.9583 24.0451L12.0866 23.8234C13.1366 21.9917 14.8633 21.9917 15.925 23.8234L16.0533 24.0451C16.6016 24.9667 17.7916 25.2934 18.7133 24.7451L20.7316 23.5901C21.7933 22.9834 22.155 21.6184 21.5483 20.5684C20.4866 18.7367 21.35 17.2434 23.4616 17.2434C24.675 17.2434 25.6783 16.2517 25.6783 15.0267V12.9734C25.6666 11.7601 24.675 10.7567 23.45 10.7567ZM14 17.7917C11.9116 17.7917 10.2083 16.0884 10.2083 14.0001C10.2083 11.9117 11.9116 10.2084 14 10.2084C16.0883 10.2084 17.7916 11.9117 17.7916 14.0001C17.7916 16.0884 16.0883 17.7917 14 17.7917Z"
          fill="white"
        />
      </svg>
    ),
  },
]
const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-icon">
        { sidebarData.map( sidebar => {
          return (
            <div className="icon-state" key={sidebar.icon}>
            <div className="icon">{ sidebar.icon }</div>
            </div>
          )
        } ) }
      </section>
    </div>
  )
}

export default Sidebar
