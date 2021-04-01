import React from "react";

const EditButton = ({ onClick, style, className, color = "black" }) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={style}
			className={className}
			onClick={onClick}
		>
			<path
				d="M0.894205 21.929L4.311 23.0586C4.4518 23.7858 4.643 24.5018 4.88221 25.197L2.4838 27.8874L2.7174 28.369C3.1222 29.2042 3.5926 30.0162 4.1142 30.7826L4.415 31.225L7.9278 30.4938C8.415 31.0538 8.94221 31.5802 9.5022 32.0682L8.771 35.5802L9.2126 35.881C9.9798 36.4034 10.7926 36.8738 11.627 37.2786L12.1086 37.5122L14.799 35.1138C15.4942 35.353 16.2102 35.5442 16.9374 35.685L18.0678 39.1018L18.6014 39.1402C19.0638 39.1746 19.5294 39.197 19.9998 39.197C20.4702 39.197 20.9358 39.1746 21.3982 39.141L21.9318 39.1026L23.0614 35.6858C23.7886 35.545 24.5046 35.3538 25.1998 35.1146L27.8902 37.513L28.3718 37.2794C29.207 36.8746 30.019 36.4042 30.7854 35.8826L31.2278 35.5818L30.4966 32.069C31.0566 31.5818 31.583 31.0546 32.071 30.4946L35.583 31.2258L35.8838 30.7842C36.4054 30.0178 36.8758 29.205 37.2814 28.3698L37.515 27.8882L35.1166 25.197C35.3558 24.5018 35.547 23.7858 35.6878 23.0586L39.1046 21.9282L39.143 21.3946C39.1774 20.933 39.1998 20.4674 39.1998 19.997C39.1998 19.5266 39.1774 19.061 39.1438 18.5986L39.1054 18.065L35.6886 16.9354C35.5478 16.2082 35.3566 15.4922 35.1174 14.797L37.5158 12.1066L37.2822 11.625C36.8774 10.7898 36.407 9.97776 35.8854 9.21136L35.5846 8.76896L32.0718 9.50016C31.5846 8.94016 31.0574 8.41376 30.4974 7.92576L31.2286 4.41376L30.787 4.11296C30.0198 3.59055 29.207 3.12016 28.3726 2.71536L27.891 2.48176L25.2006 4.88016C24.5054 4.64096 23.7894 4.44976 23.0622 4.30896L21.9318 0.892155L21.3982 0.853755C20.4742 0.787355 19.5262 0.787355 18.6022 0.853755L18.0686 0.892155L16.939 4.30896C16.2118 4.44976 15.4958 4.64096 14.8006 4.88016L12.1102 2.48096L11.6286 2.71456C10.795 3.11936 9.9822 3.58895 9.215 4.11215L8.7726 4.41296L9.50381 7.92576C8.9438 8.41296 8.4174 8.94016 7.9294 9.50016L4.4174 8.76896L4.1166 9.21056C3.5942 9.97776 3.1238 10.7906 2.719 11.625L2.4854 12.1066L4.8838 14.797C4.6446 15.4922 4.4534 16.2082 4.3126 16.9354L0.895805 18.0658L0.857405 18.5994C0.822205 19.061 0.799805 19.5266 0.799805 19.997C0.799805 20.4674 0.822205 20.933 0.855805 21.3954L0.894205 21.929ZM2.419 19.2466L5.727 18.1522L5.8054 17.673C5.959 16.7234 6.2078 15.7914 6.5446 14.9042L6.7166 14.4506L4.3974 11.849C4.6286 11.4082 4.879 10.9754 5.1462 10.5562L8.54381 11.2634L8.851 10.8882C9.4606 10.1442 10.1462 9.45776 10.8902 8.84976L11.2654 8.54256L10.5582 5.14416C10.9782 4.87696 11.4102 4.62656 11.851 4.39536L14.4526 6.71536L14.9062 6.54336C15.7942 6.20656 16.7262 5.95776 17.6758 5.80416L18.155 5.72576L19.2486 2.41776C19.7462 2.39376 20.2526 2.39376 20.7502 2.41776L21.8446 5.72576L22.3238 5.80416C23.2734 5.95776 24.2054 6.20656 25.0926 6.54336L25.5462 6.71536L28.1478 4.39616C28.5886 4.62736 29.0214 4.87776 29.4406 5.14496L28.7334 8.54256L29.1086 8.84976C29.8526 9.45936 30.539 10.145 31.147 10.889L31.4542 11.2642L34.8526 10.557C35.1198 10.9762 35.3702 11.4082 35.6014 11.8498L33.2822 14.4514L33.4542 14.905C33.791 15.7938 34.0398 16.7258 34.1934 17.6746L34.2718 18.1538L37.5798 19.2474C37.5926 19.4954 37.5998 19.745 37.5998 19.997C37.5998 20.249 37.5926 20.4986 37.5806 20.7474L34.2726 21.8418L34.1942 22.321C34.0406 23.2706 33.7918 24.2026 33.455 25.0898L33.283 25.5434L35.6022 28.145C35.371 28.5866 35.1206 29.0186 34.8534 29.4378L31.4558 28.7306L31.1486 29.1058C30.539 29.8498 29.8534 30.5362 29.1094 31.1442L28.7342 31.4514L29.4414 34.8498C29.0222 35.117 28.5902 35.3674 28.1486 35.5986L25.547 33.2794L25.0934 33.4514C24.2046 33.7882 23.2726 34.037 22.3238 34.1906L21.8446 34.269L20.751 37.577C20.2534 37.601 19.747 37.601 19.2494 37.577L18.155 34.269L17.6758 34.1906C16.7262 34.037 15.7942 33.7882 14.907 33.4514L14.4534 33.2794L11.8518 35.5986C11.411 35.3674 10.9782 35.117 10.559 34.8498L11.2662 31.4522L10.891 31.145C10.147 30.5354 9.4606 29.8498 8.8526 29.1058L8.5454 28.7306L5.147 29.4378C4.8798 29.0186 4.6294 28.5866 4.3982 28.145L6.7174 25.5434L6.5454 25.0898C6.2086 24.201 5.9598 23.269 5.8062 22.3202L5.7278 21.841L2.4198 20.7474C2.407 20.4986 2.3998 20.249 2.3998 19.997C2.3998 19.745 2.407 19.4954 2.419 19.2466Z"
				fill={color}
				fillOpacity="0.7"
			/>
			<path
				d="M19.9998 31.1969C26.1758 31.1969 31.1998 26.1729 31.1998 19.9969C31.1998 13.8209 26.1758 8.79688 19.9998 8.79688C13.8238 8.79688 8.7998 13.8209 8.7998 19.9969C8.7998 26.1729 13.8238 31.1969 19.9998 31.1969ZM19.9998 10.3969C25.2934 10.3969 29.5998 14.7033 29.5998 19.9969C29.5998 25.2905 25.2934 29.5969 19.9998 29.5969C14.7062 29.5969 10.3998 25.2905 10.3998 19.9969C10.3998 14.7033 14.7062 10.3969 19.9998 10.3969Z"
				fill={color}
				fillOpacity="0.7"
			/>
		</svg>
	);
};

export default EditButton;
