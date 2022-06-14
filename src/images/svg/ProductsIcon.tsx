import React from "react";

type Params = {
  params?: {
    color?: string;
  };
};

const ProductIcon = ({ params }: Params) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M7.12506 20.25C8.98902 20.25 10.5001 18.739 10.5001 16.875C10.5001 15.011 8.98902 13.5 7.12506 13.5C5.2611 13.5 3.75006 15.011 3.75006 16.875C3.75006 18.739 5.2611 20.25 7.12506 20.25Z"
        fill="#595959"
      />
      <path
        opacity="0.2"
        d="M7.12506 10.5C8.98902 10.5 10.5001 8.98896 10.5001 7.125C10.5001 5.26104 8.98902 3.75 7.12506 3.75C5.2611 3.75 3.75006 5.26104 3.75006 7.125C3.75006 8.98896 5.2611 10.5 7.12506 10.5Z"
        fill={params?.color || "#595959"}
      />
      <path
        opacity="0.2"
        d="M16.8751 10.5C18.739 10.5 20.2501 8.98896 20.2501 7.125C20.2501 5.26104 18.739 3.75 16.8751 3.75C15.0111 3.75 13.5001 5.26104 13.5001 7.125C13.5001 8.98896 15.0111 10.5 16.8751 10.5Z"
        fill={params?.color || "#595959"}
      />
      <path
        opacity="0.2"
        d="M16.8751 20.25C18.739 20.25 20.2501 18.739 20.2501 16.875C20.2501 15.011 18.739 13.5 16.8751 13.5C15.0111 13.5 13.5001 15.011 13.5001 16.875C13.5001 18.739 15.0111 20.25 16.8751 20.25Z"
        fill={params?.color || "#595959"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.12506 4.5C5.67531 4.5 4.50006 5.67525 4.50006 7.125C4.50006 8.57475 5.67531 9.75 7.12506 9.75C8.57481 9.75 9.75006 8.57475 9.75006 7.125C9.75006 5.67525 8.57481 4.5 7.12506 4.5ZM3.00006 7.125C3.00006 4.84683 4.84689 3 7.12506 3C9.40324 3 11.2501 4.84683 11.2501 7.125C11.2501 9.40317 9.40324 11.25 7.12506 11.25C4.84689 11.25 3.00006 9.40317 3.00006 7.125Z"
        fill={params?.color || "#595959"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8751 4.5C15.4253 4.5 14.2501 5.67525 14.2501 7.125C14.2501 8.57475 15.4253 9.75 16.8751 9.75C18.3248 9.75 19.5001 8.57475 19.5001 7.125C19.5001 5.67525 18.3248 4.5 16.8751 4.5ZM12.7501 7.125C12.7501 4.84683 14.5969 3 16.8751 3C19.1532 3 21.0001 4.84683 21.0001 7.125C21.0001 9.40317 19.1532 11.25 16.8751 11.25C14.5969 11.25 12.7501 9.40317 12.7501 7.125Z"
        fill={params?.color || "#595959"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8751 14.25C15.4253 14.25 14.2501 15.4253 14.2501 16.875C14.2501 18.3247 15.4253 19.5 16.8751 19.5C18.3248 19.5 19.5001 18.3247 19.5001 16.875C19.5001 15.4253 18.3248 14.25 16.8751 14.25ZM12.7501 16.875C12.7501 14.5968 14.5969 12.75 16.8751 12.75C19.1532 12.75 21.0001 14.5968 21.0001 16.875C21.0001 19.1532 19.1532 21 16.8751 21C14.5969 21 12.7501 19.1532 12.7501 16.875Z"
        fill={params?.color || "#595959"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.12506 14.25C5.67531 14.25 4.50006 15.4253 4.50006 16.875C4.50006 18.3247 5.67531 19.5 7.12506 19.5C8.57481 19.5 9.75006 18.3247 9.75006 16.875C9.75006 15.4253 8.57481 14.25 7.12506 14.25ZM3.00006 16.875C3.00006 14.5968 4.84689 12.75 7.12506 12.75C9.40324 12.75 11.2501 14.5968 11.2501 16.875C11.2501 19.1532 9.40324 21 7.12506 21C4.84689 21 3.00006 19.1532 3.00006 16.875Z"
        fill={params?.color || "#595959"}
      />
    </svg>
  );
};

export default ProductIcon;
