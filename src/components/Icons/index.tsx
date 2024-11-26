/* eslint-disable react/jsx-key */
// @ts-nocheck
const GasIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		data-prefix="far"
		data-icon="gas-pump"
		role="img"
		viewBox="0 0 512 512"
		width={14}
		height={14}
	>
		<path
			fill="currentColor"
			d="M493.3 107.3l-86.6-86.6c-3.1-3.1-8.2-3.1-11.3 0l-22.6 22.6c-3.1 3.1-3.1 8.2 0 11.3L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V48c0-26.5-21.5-48-48-48H80C53.5 0 32 21.5 32 48v416H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-24V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.7-33.3-18.7-45.3zM272 464H80V240h192v224zm0-272H80V48h192v144z"
		/>
	</svg>
);

const CrossIcon = () => {
	return (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
				fill="currentColor"
			/>
		</svg>
	);
};

const ArrowIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<title>Arrow Forward</title>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="48"
				d="M268 112l144 144-144 144M392 256H100"
			/>
		</svg>
	);
};

const AggIcons = [
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="7.78378" fill="url(#paint0_radial_1212_31)" />
		<rect
			x="0.162162"
			y="0.162162"
			width="47.6757"
			height="47.6757"
			rx="7.62162"
			stroke="url(#paint1_linear_1212_31)"
			strokeOpacity="0.1"
			strokeWidth="0.324324"
		/>
		<g clipPath="url(#clip0_1212_31)">
			<path
				d="M15.3874 27.144L17.4291 25.032L14.891 21.6069L11.6592 17.0344C10.4794 19.0473 9.85922 21.339 9.86281 23.6722C9.86281 27.6831 11.6592 31.2746 14.4918 33.6864L18.5942 30.788C17.1906 29.9149 16.0752 28.6477 15.3874 27.1446V27.144ZM19.5417 16.0461L21.6537 18.0877L25.0788 15.5497L29.6513 12.3179C27.6384 11.1381 25.3467 10.5179 23.0135 10.5215C19.0025 10.5215 15.4111 12.3179 12.9992 15.1505L15.8977 19.2529C16.7707 17.8493 18.0379 16.7339 19.5411 16.0461H19.5417ZM28.5979 22.3124L31.136 25.7375L34.3678 30.31C35.5476 28.2971 36.1678 26.0054 36.1642 23.6722C36.1642 19.6612 34.3678 16.0698 31.5351 13.6579L27.4321 16.5564C28.8357 17.4294 29.9511 18.6966 30.6389 20.1997L28.5973 22.3124H28.5979ZM33.0277 32.1938L30.1293 28.0915C29.2563 29.4951 27.9891 30.6105 26.4859 31.2983L24.3733 29.2566L20.9482 31.7947L16.3757 35.0265C18.3886 36.2063 20.6803 36.8265 23.0135 36.8229C27.0245 36.8229 30.6159 35.0265 33.0277 32.1938V32.1938Z"
				fill="white"
			/>
		</g>
		<defs>
			<radialGradient
				id="paint0_radial_1212_31"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(22.0274 24.3288) rotate(89.4077) scale(18.2668)"
			>
				<stop stopColor="#222328" />
				<stop offset="1" stopColor="#222327" />
			</radialGradient>
			<linearGradient id="paint1_linear_1212_31" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<clipPath id="clip0_1212_31">
				<rect width="26.9589" height="26.3014" fill="white" transform="translate(9.86279 10.5215)" />
			</clipPath>
		</defs>
	</svg>,
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="7.78378" fill="url(#paint0_radial_1212_7)" />
		<rect
			x="0.162162"
			y="0.162162"
			width="47.6757"
			height="47.6757"
			rx="7.62162"
			stroke="url(#paint1_linear_1212_7)"
			strokeOpacity="0.1"
			strokeWidth="0.324324"
		/>
		<path
			d="M17.4607 25.1864L18.1102 20.291L12.4678 16.3707L17.6231 18.1176L18.8409 16.2489L23.2859 13.4863L33.0891 18.8894L33.5965 27.1364L29.2327 33.2098L25.7823 33.7379L27.5684 30.4676V27.3191L26.2695 24.8614L24.9502 23.9879L22.9205 26.0801V28.2941L21.3374 29.7769L19.328 30.0207L18.435 30.5285L16.9736 30.0614L16.3647 27.8676L17.4607 26.3239V25.1864Z"
			fill="#222428"
		/>
		<path
			d="M26.4725 16.3283C25.3968 16.1049 24.2196 16.1658 24.2196 16.1658C24.2196 16.1658 23.8339 17.9533 21.439 18.4205C21.4592 18.4205 24.6052 19.4971 26.4725 16.3283Z"
			fill="#222428"
		/>
		<path
			d="M27.4466 32.5387C28.7456 31.523 29.7198 30.1215 30.1663 28.5371C30.1866 28.4762 30.3693 28.3746 30.4911 28.2933C30.694 28.1715 30.897 28.0699 30.9376 27.9074C31.0188 27.4402 31.0594 26.9527 31.0594 26.4652C31.0594 26.2824 30.8767 26.0996 30.694 25.9168C30.552 25.7949 30.4099 25.6527 30.4099 25.5512C30.2069 23.7027 29.3545 21.9762 27.9946 20.7168L27.8525 20.859C29.1718 22.098 30.0243 23.784 30.2069 25.5715C30.2272 25.734 30.3896 25.8965 30.552 26.059C30.694 26.1808 30.8564 26.3637 30.8564 26.4449C30.8564 26.9121 30.8158 27.3793 30.7347 27.8465C30.7143 27.9277 30.5317 28.009 30.3896 28.0902C30.1866 28.1918 30.004 28.2933 29.9634 28.4558C29.4763 30.1824 28.3599 31.6855 26.8783 32.6605C27.1421 32.0918 27.9743 30.2433 28.4209 29.309L28.3396 26.3027L25.762 23.8043L24.3006 24.0074L22.6972 26.6074C22.6972 26.6074 23.4482 27.5621 22.3928 28.6793C21.3576 29.7762 20.5457 30.0199 20.5457 30.0199L19.7948 29.6137C20.018 29.3293 20.4646 28.9027 20.8096 28.6183C21.3982 28.1308 21.9868 28.0902 21.9868 27.5621C22.0071 26.4652 20.8299 26.7699 20.8299 26.7699L20.4037 27.1762L20.221 28.6793L19.328 29.7965L19.2265 29.7762L17.7651 29.4512C17.7651 29.4512 18.6582 28.984 18.8003 28.4558C18.9423 27.948 18.5161 26.2621 18.4958 26.1605C18.5161 26.1808 18.922 26.5262 19.1047 27.0949C19.4294 26.2012 19.8557 25.348 19.9774 25.2668C20.0992 25.1855 21.7432 24.3121 21.7432 24.3121L21.1953 25.7543L21.6012 25.5308L22.5754 23.134C22.5754 23.134 23.5293 22.6668 24.2397 22.6668C25.5184 22.6465 27.406 21.0824 26.5535 18.2793C26.7971 18.3808 31.0188 20.4933 31.7495 24.6371C32.2975 27.8262 30.4911 30.8121 27.4466 32.5387Z"
			fill="#222428"
		/>
		<path
			d="M22.6164 16.7769C23.0832 16.2285 22.9005 15.416 22.9005 15.416L21.5406 17.4269C21.5203 17.4269 22.0277 17.4473 22.6164 16.7769Z"
			fill="white"
		/>
		<path
			d="M18.0493 27.7656L18.2116 26.9531C18.2116 26.9531 17.5419 28.1312 17.481 28.2937C17.4201 28.4765 17.5216 28.8015 17.7854 28.7812C18.0493 28.7609 18.3741 28.375 18.3741 28.0906C18.3741 27.725 18.0493 27.7656 18.0493 27.7656Z"
			fill="white"
		/>
		<path
			d="M30.1056 14.8463C30.1056 14.8463 31.1204 14.8869 32.1758 15.0088C29.8011 13.14 27.5482 12.5916 25.7215 12.5916C23.2047 12.5916 21.4998 13.6275 21.3983 13.6885L22.1899 12.4291C22.1899 12.4291 19.0236 12.1244 17.9073 15.476C17.6231 14.765 17.3593 13.7291 17.3593 13.7291C17.3593 13.7291 15.7153 15.1713 16.4866 17.5682C14.599 16.8775 11.8995 15.9228 11.7981 15.9025C11.656 15.8822 11.6154 15.9432 11.6154 15.9432C11.6154 15.9432 11.5748 16.0041 11.6966 16.1057C11.9198 16.2885 16.1821 19.4369 17.1158 20.0463C16.9128 20.7775 16.9128 21.1228 17.1158 21.4682C17.3999 21.9353 17.4202 22.1791 17.3796 22.5244C17.339 22.8697 16.9737 25.8557 16.8925 26.2213C16.8113 26.5869 15.9589 27.8869 15.9994 28.2728C16.04 28.6588 16.5677 30.3041 17.0346 30.4869C17.3796 30.6088 18.2321 30.8728 18.8004 30.8728C19.0033 30.8728 19.186 30.8322 19.2672 30.751C19.6122 30.4463 19.7137 30.3853 19.9573 30.3853C19.9776 30.3853 19.9979 30.3853 20.0182 30.3853C20.1196 30.3853 20.2414 30.4057 20.3835 30.4057C20.7082 30.4057 21.1345 30.3447 21.4389 30.0603C21.8855 29.6135 22.6567 29.0041 22.9003 28.7197C23.2047 28.3338 23.3671 27.8057 23.2859 27.2775C23.225 26.79 23.4889 26.3635 23.7933 25.9369C24.1789 25.4291 24.8893 24.515 24.8893 24.515C26.2898 25.5713 27.1625 27.176 27.1625 28.9635C27.1625 32.1322 24.4022 34.6916 20.9924 34.6916C20.4647 34.6916 19.9573 34.6307 19.4498 34.5088C21.0127 35.0572 22.332 35.24 23.4077 35.24C25.7012 35.24 26.919 34.4072 26.919 34.4072C26.919 34.4072 26.4928 34.9557 25.8027 35.5853C25.823 35.5853 25.823 35.5853 25.823 35.5853C29.6184 35.0572 31.4654 31.9291 31.4654 31.9291C31.4654 31.9291 31.3234 32.9447 31.1407 33.6353C36.1945 29.8369 35.3421 25.0838 35.3218 24.9213C35.3624 24.9822 35.8698 25.5916 36.1336 25.9166C36.9455 17.5478 30.1056 14.8463 30.1056 14.8463ZM22.332 28.2119C22.2508 28.3135 21.9057 28.6182 21.6622 28.8416C21.4186 29.065 21.1548 29.2885 20.9518 29.4916C20.8706 29.5728 20.7082 29.6135 20.4647 29.6135C20.3835 29.6135 20.3023 29.6135 20.2414 29.6135C20.2009 29.6135 20.1602 29.6135 20.1196 29.6135C20.079 29.6135 20.0588 29.6135 20.0384 29.6135C19.9776 29.6135 19.9167 29.6135 19.8558 29.6135C20.1602 29.2072 21.0533 28.2728 21.3578 28.0697C21.7231 27.826 21.9057 27.5822 21.6825 27.1557C21.4592 26.7291 20.8706 26.8307 20.8706 26.8307C20.8706 26.8307 21.2157 26.6885 21.5201 26.6885C21.1345 26.5869 20.6474 26.6885 20.4241 26.9119C20.1805 27.1353 20.2211 27.9275 20.1196 28.4353C20.0182 28.9635 19.6731 29.2275 19.1454 29.715C18.8613 29.9791 18.6583 30.0603 18.4959 30.0603C18.1509 29.9994 17.745 29.8978 17.4608 29.7963C17.2578 29.5322 16.9534 28.6588 16.8722 28.2932C16.9331 28.09 17.1766 27.6635 17.2984 27.4197C17.542 26.9525 17.6841 26.6885 17.7246 26.4447C17.8058 26.0994 18.0697 23.9666 18.1712 23.0728C18.435 23.4182 18.8004 23.9869 18.7192 24.3525C19.3078 23.5197 18.8815 22.7072 18.6786 22.3822C18.4959 22.0572 18.2523 21.4072 18.4553 20.7166C18.6583 20.026 19.389 18.1166 19.389 18.1166C19.389 18.1166 19.6325 18.5432 19.9776 18.4619C20.3226 18.3807 23.1032 14.1963 23.1032 14.1963C23.1032 14.1963 23.8542 15.8416 23.0626 17.04C22.2508 18.2385 21.4592 18.4619 21.4592 18.4619C21.4592 18.4619 22.5755 18.665 23.6107 17.9135C24.0369 18.9088 24.4428 19.9447 24.4631 20.0869C24.4022 20.2291 23.5903 22.1791 23.5092 22.301C23.4686 22.3416 23.1844 22.4228 22.9815 22.4635C22.6364 22.565 22.4334 22.626 22.3523 22.6869C22.2102 22.8088 21.5607 24.5963 21.2563 25.4697C20.8909 25.5713 20.5256 25.7744 20.2617 26.1807C20.4038 26.0791 20.8503 26.0182 21.1751 25.9775C21.4592 25.9572 22.332 26.4244 22.5552 27.2978C22.5552 27.3182 22.5552 27.3182 22.5552 27.3385C22.5958 27.6635 22.4943 27.9682 22.332 28.2119ZM20.4241 28.4557C20.6067 28.1916 20.5865 27.7447 20.6067 27.6025C20.6271 27.4603 20.6676 27.1963 20.83 27.1557C20.9924 27.115 21.378 27.176 21.378 27.4603C21.378 27.7244 21.0939 27.7853 20.8909 27.9682C20.7488 28.1103 20.4647 28.415 20.4241 28.4557ZM28.5224 24.576C28.7254 23.54 28.7457 22.6463 28.6848 21.915C29.4763 22.9713 29.9635 24.251 30.1056 25.5713C30.1259 25.7338 30.2882 25.8963 30.4506 26.0588C30.5927 26.1807 30.7551 26.3432 30.7551 26.4447C30.7551 26.9119 30.7144 27.3791 30.6333 27.8463C30.613 27.9072 30.4303 28.0088 30.2882 28.09C30.0853 28.1916 29.9026 28.2932 29.862 28.4557C29.4155 30.0197 28.4615 31.401 27.1829 32.376C29.0704 30.4057 29.9838 27.1557 28.5224 24.576ZM27.2437 32.5588C28.563 31.5432 29.5778 30.1213 30.0244 28.5166C30.0446 28.4557 30.2273 28.3541 30.3491 28.2728C30.5521 28.1713 30.7551 28.0494 30.7957 27.8869C30.8768 27.4197 30.9174 26.9322 30.9174 26.4447C30.9174 26.2619 30.7347 26.0791 30.5521 25.8963C30.4506 25.7744 30.2882 25.6322 30.2882 25.5307C30.1259 24.0478 29.5373 22.6463 28.6239 21.4885C28.218 19.051 26.5943 18.2994 26.5537 18.2791C26.5943 18.34 27.6497 19.8635 26.919 21.651C26.168 23.4588 24.2399 23.1744 24.0775 23.1947C23.9151 23.1947 23.2859 24.0072 22.4943 25.5103C22.3928 25.4697 21.9666 25.3682 21.4795 25.4494C21.8449 24.4338 22.3928 22.9916 22.4943 22.8697C22.5349 22.8291 22.8394 22.7478 23.0424 22.6869C23.428 22.5853 23.6107 22.5244 23.6716 22.4432C23.7122 22.3822 23.9151 21.915 24.1181 21.4275C24.3007 21.4275 24.7676 21.3869 24.8081 21.3666C24.8487 21.326 25.2344 20.3307 25.2344 20.2088C25.2344 20.1072 24.4428 18.1369 24.1384 17.3853C24.2804 17.2228 24.4225 17.0197 24.5646 16.7963C28.7254 17.2432 31.9728 20.7775 31.9728 25.0635C31.9728 28.3541 30.0446 31.2182 27.2437 32.5588Z"
			fill="white"
		/>
		<path
			d="M21.8451 21.5902C22.2308 21.1434 22.0278 20.3105 21.3174 20.1684C21.5001 19.7418 21.764 18.8887 21.764 18.8887C21.764 18.8887 19.6937 22.1387 19.511 22.1996C19.3283 22.2605 19.1457 21.5496 19.1457 21.5496C18.76 23.0324 19.7952 23.2355 19.9169 22.7684C20.4852 22.6262 21.4595 22.0168 21.8451 21.5902Z"
			fill="white"
		/>
		<path
			d="M20.0792 22.382L21.1346 20.5742C21.1346 20.5742 21.7435 20.8789 21.4391 21.3664C21.0535 21.9351 20.0792 22.382 20.0792 22.382Z"
			fill="white"
		/>
		<path
			d="M33.1297 30.7504C32.8252 31.1567 32.4802 31.5832 32.0742 31.9895C34.6925 26.952 32.196 22.341 32.0945 22.1582C32.2772 22.341 32.4599 22.5442 32.6222 22.7269C34.6316 24.9613 34.8752 28.3129 33.1297 30.7504Z"
			fill="#222428"
		/>
		<path
			d="M35.5652 24.2718C34.6519 21.814 33.3529 19.7218 30.4911 17.8327C27.7307 16.0046 24.7674 16.1468 24.605 16.1671C24.5848 16.1671 24.5645 16.1671 24.5645 16.1671C24.6659 16.1265 24.7674 16.1061 24.8689 16.0858C25.4981 15.8827 26.31 15.7202 27.1218 15.6187C29.2732 15.314 31.445 16.0452 32.9266 17.6093C32.9469 17.6296 32.9469 17.6296 32.9672 17.6499C34.6519 19.4374 35.5246 21.6718 35.5652 24.2718Z"
			fill="#222428"
		/>
		<path
			d="M29.8417 14.2176C26.8175 13.6488 24.869 13.9332 23.4685 14.4613C23.4279 14.2988 23.2858 13.9738 23.1641 13.7098C22.7378 14.2176 22.2913 14.8269 22.0072 15.2129C21.2359 15.741 20.9111 16.2488 20.9111 16.2488C21.3577 14.7254 22.6566 13.5879 24.2398 13.3035C24.6863 13.2223 25.1734 13.1816 25.7012 13.1816C27.1016 13.2019 28.5021 13.5473 29.8417 14.2176Z"
			fill="#222428"
		/>
		<path
			d="M18.6583 18.1176C16.2835 18.0363 17.0751 15.2738 17.1157 15.1113C17.1157 15.1316 17.2781 17.2848 18.6583 18.1176Z"
			fill="#222428"
		/>
		<path
			d="M20.9924 13.1406C19.1657 14.2375 19.531 16.8578 19.531 16.8578C17.7855 14.1969 20.8503 13.2016 20.9924 13.1406Z"
			fill="#222428"
		/>
		<path
			d="M17.9885 18.8473C18.1103 18.9488 18.2321 19.1316 18.09 19.3957C18.0088 19.5379 17.887 19.5176 17.7044 19.4363C17.4608 19.3144 15.9994 18.4613 14.6802 17.5879C16.1821 18.116 17.7044 18.6848 17.9479 18.8066C17.9479 18.8066 17.9682 18.8269 17.9885 18.8473Z"
			fill="#222428"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_1212_7"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(22.0274 24.3288) rotate(89.4077) scale(18.2668)"
			>
				<stop stopColor="#222328" />
				<stop offset="1" stopColor="#222327" />
			</radialGradient>
			<linearGradient id="paint1_linear_1212_7" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>,
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="7.78378" fill="url(#paint0_radial_1212_35)" />
		<rect
			x="0.162162"
			y="0.162162"
			width="47.6757"
			height="47.6757"
			rx="7.62162"
			stroke="url(#paint1_linear_1212_35)"
			strokeOpacity="0.1"
			strokeWidth="0.324324"
		/>
		<path
			d="M22.679 23.9959L32.3358 29.5641C32.4131 29.608 32.5003 29.6309 32.5891 29.6307C32.6778 29.6305 32.7649 29.607 32.842 29.5627C32.919 29.5184 32.9832 29.4546 33.0283 29.3778C33.0734 29.301 33.0979 29.2137 33.0994 29.1245L33.101 18.8706C33.1 18.7813 33.0758 18.6937 33.0308 18.6166C32.9858 18.5395 32.9216 18.4756 32.8445 18.4312C32.7673 18.3868 32.68 18.3633 32.5911 18.3633C32.5022 18.3632 32.4148 18.3865 32.3377 18.4308L22.679 23.9959Z"
			fill="white"
		/>
		<path
			d="M31.7741 16.0301L25.3636 11.1033C25.2952 11.0517 25.215 11.0181 25.1304 11.0055C25.0458 10.993 24.9594 11.0019 24.8791 11.0315C24.7988 11.0611 24.7271 11.1105 24.6706 11.1751C24.6141 11.2397 24.5746 11.3174 24.5556 11.4013L22.2117 22.3702L31.7221 16.8797C31.7957 16.8383 31.8577 16.7791 31.9026 16.7073C31.9474 16.6356 31.9736 16.5537 31.9788 16.4692C31.984 16.3846 31.9679 16.3001 31.9322 16.2234C31.8964 16.1467 31.8421 16.0802 31.7741 16.0301Z"
			fill="white"
		/>
		<path
			d="M25.3594 36.8929L31.7864 31.9608C31.8529 31.9096 31.9058 31.8429 31.9405 31.7664C31.9753 31.69 31.9908 31.606 31.9857 31.5221C31.9806 31.4382 31.955 31.3568 31.9112 31.2852C31.8674 31.2135 31.8068 31.1537 31.7347 31.1112L22.2112 25.625L24.559 36.5947C24.5762 36.6788 24.6144 36.7571 24.67 36.8223C24.7256 36.8874 24.7969 36.9373 24.8769 36.9671C24.957 36.9969 25.0433 37.0057 25.1277 36.9928C25.2122 36.9798 25.2919 36.9454 25.3594 36.8929Z"
			fill="white"
		/>
		<path
			d="M20.2029 23.995L22.7323 12.1766C22.7543 12.0742 22.7443 11.9675 22.7037 11.8711C22.6631 11.7746 22.5939 11.6931 22.5056 11.6377C22.4172 11.5823 22.314 11.5556 22.21 11.5613C22.106 11.567 22.0063 11.6049 21.9244 11.6697L15.453 16.6391C15.2891 16.7652 15.1563 16.9276 15.065 17.1137C14.9736 17.2998 14.9263 17.5046 14.9266 17.7121L14.9246 30.2985C14.9242 30.506 14.9715 30.7108 15.0627 30.8969C15.154 31.0831 15.2867 31.2455 15.4506 31.3717L21.9205 36.3357C22.0029 36.3978 22.102 36.4335 22.2049 36.4379C22.3078 36.4423 22.4097 36.4154 22.497 36.3606C22.5845 36.3058 22.6533 36.2258 22.6946 36.1309C22.7359 36.036 22.7477 35.9308 22.7285 35.8291L20.2029 23.995Z"
			fill="white"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_1212_35"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(22.0274 24.3288) rotate(89.4077) scale(18.2668)"
			>
				<stop stopColor="#222328" />
				<stop offset="1" stopColor="#222327" />
			</radialGradient>
			<linearGradient id="paint1_linear_1212_35" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>,
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="7.78378" fill="url(#paint0_radial_1212_25)" />
		<rect
			x="0.162162"
			y="0.162162"
			width="47.6757"
			height="47.6757"
			rx="7.62162"
			stroke="url(#paint1_linear_1212_25)"
			strokeOpacity="0.1"
			strokeWidth="0.324324"
		/>
		<path
			d="M22.9744 27.4727C18.4423 27.4727 14.7686 29.5912 14.7686 32.2048C14.7686 34.8183 18.4423 36.9369 22.9744 36.9369C27.5064 36.9369 31.1801 34.8183 31.1801 32.2048C31.1801 29.5913 27.5062 27.4727 22.9744 27.4727ZM19.0345 32.8127C18.2027 33.2193 17.4281 32.8127 17.2795 31.8909C17.1166 30.9033 18.4456 28.5561 18.7515 30.331C19.0571 32.1058 20.4178 29.6239 20.4262 30.7347C20.3807 31.6314 19.8458 32.4302 19.0345 32.8127ZM29.1668 31.8909C29.0183 32.8127 28.2437 33.2193 27.4121 32.8127C26.6005 32.4302 26.0657 31.6314 26.0204 30.7347C26.0287 29.6239 27.3892 32.1058 27.6951 30.331C28.0007 28.5561 29.3295 30.9033 29.1668 31.8909V31.8909Z"
			fill="white"
		/>
		<path
			d="M34.8147 16.5165C34.5793 14.8314 28.8878 16.0332 28.1482 16.1605C28.1102 16.167 28.0747 16.1346 28.0825 16.0969C28.1578 15.7192 28.2123 14.6984 27.4902 14.4773C27.0285 14.3359 26.7241 14.5968 26.5434 14.8601C26.4625 14.9782 26.2205 15.4887 26.0701 15.8431C25.9891 16.0344 25.8003 16.3141 25.5928 16.3091C24.7225 16.0378 23.8485 15.9021 22.9746 15.9021C22.1006 15.9021 21.2265 16.0378 20.3562 16.3091C20.1487 16.3141 19.9598 16.0344 19.8788 15.8431C19.7284 15.4887 19.4863 14.9782 19.4054 14.8601C19.2249 14.5968 18.9205 14.3359 18.4589 14.4773C17.7368 14.6984 17.791 15.7192 17.8665 16.0969C17.8741 16.1346 17.8386 16.167 17.8008 16.1605C17.0612 16.0332 11.3697 14.8314 11.1342 16.5165C10.9107 18.1148 12.9291 20.3191 15.0411 21.3098C15.245 21.4054 15.4072 21.567 15.6047 21.6745C15.937 21.8557 16.1354 22.3079 16.0867 22.7157V28.6018L16.8578 28.1588C18.0331 27.4845 19.26 27.169 20.2044 26.9818H20.2379C20.9926 26.8142 21.7629 26.728 22.536 26.7243H23.413C24.1859 26.728 24.9563 26.8142 25.7111 26.9818H25.7444C26.689 27.169 27.9158 27.4845 29.0914 28.1588L29.8625 28.6018V22.7157C29.8136 22.3079 30.0118 21.8557 30.3441 21.6745C30.5421 21.567 30.7038 21.4054 30.9077 21.3098C33.0197 20.3191 35.0383 18.1148 34.8147 16.5165V16.5165ZM22.4253 22.5509C22.3927 22.7256 21.9762 23.0471 20.9437 23.3136C20.2207 23.4958 19.4684 23.5636 18.7242 23.5176C18.5493 23.5066 18.374 23.4774 18.2116 23.4112C17.9155 23.2905 17.6653 23.083 17.4791 22.8097C17.2278 22.4526 17.108 22.0551 17.1847 21.6254C17.2595 21.1952 17.5077 20.8624 17.8659 20.6132C18.1342 20.4199 18.4402 20.3106 18.7597 20.2987C18.9347 20.2924 19.1096 20.3247 19.2775 20.3745C19.9925 20.586 20.6765 20.9077 21.2936 21.3265C22.1729 21.9305 22.4544 22.3754 22.4253 22.5509V22.5509ZM28.4699 22.8097C28.2839 23.083 28.0335 23.2905 27.7373 23.4112C27.5752 23.4774 27.3997 23.5066 27.2249 23.5176C26.4807 23.5636 25.7283 23.4957 25.0053 23.3136C23.9726 23.0471 23.5565 22.7256 23.5239 22.5509C23.4947 22.3754 23.7761 21.9305 24.6556 21.3265C25.2727 20.9076 25.9564 20.586 26.6716 20.3745C26.8396 20.3247 27.0144 20.2924 27.1895 20.2987C27.5088 20.3106 27.8151 20.4199 28.0832 20.6132C28.4415 20.8624 28.6898 21.1949 28.7643 21.6252C28.841 22.0549 28.7212 22.4526 28.4699 22.8097V22.8097Z"
			fill="white"
		/>
		<defs>
			<radialGradient
				id="paint0_radial_1212_25"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(22.0274 24.3288) rotate(89.4077) scale(18.2668)"
			>
				<stop stopColor="#222328" />
				<stop offset="1" stopColor="#222327" />
			</radialGradient>
			<linearGradient id="paint1_linear_1212_25" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>,
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" rx="7.78378" fill="url(#paint0_radial_1212_43)" />
		<rect
			x="0.162162"
			y="0.162162"
			width="47.6757"
			height="47.6757"
			rx="7.62162"
			stroke="url(#paint1_linear_1212_43)"
			strokeOpacity="0.1"
			strokeWidth="0.324324"
		/>
		<g clipPath="url(#clip0_1212_43)">
			<path
				d="M36.6977 35L24.8128 14L12.9273 35H36.6977ZM16.4607 23.8437L21.9215 14H11L16.4607 23.8437ZM31.8438 32.2203H17.7815L24.8128 19.7963L31.8438 32.2203Z"
				fill="white"
			/>
		</g>
		<defs>
			<radialGradient
				id="paint0_radial_1212_43"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(22.0274 24.3288) rotate(89.4077) scale(18.2668)"
			>
				<stop stopColor="#222328" />
				<stop offset="1" stopColor="#222327" />
			</radialGradient>
			<linearGradient id="paint1_linear_1212_43" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
				<stop stopColor="white" />
				<stop offset="1" stopColor="white" stopOpacity="0" />
			</linearGradient>
			<clipPath id="clip0_1212_43">
				<rect width="26" height="21" fill="white" transform="translate(11 14)" />
			</clipPath>
		</defs>
	</svg>
];


const SmolCheck = (
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_1189_652)">
			<path
				d="M3.42822 6.85631L5.18537 8.26202C5.23256 8.30088 5.28781 8.32874 5.34712 8.34357C5.40643 8.35839 5.4683 8.35982 5.52822 8.34773C5.58872 8.33639 5.64607 8.31214 5.69636 8.27664C5.74665 8.24114 5.7887 8.19523 5.81965 8.14202L8.57108 3.42773"
				stroke="#61A2FE"
				strokeWidth="0.857143"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.99965 11.5706C9.07667 11.5706 11.5711 9.07618 11.5711 5.99916C11.5711 2.92215 9.07667 0.427734 5.99965 0.427734C2.92264 0.427734 0.428223 2.92215 0.428223 5.99916C0.428223 9.07618 2.92264 11.5706 5.99965 11.5706Z"
				stroke="#61A2FE"
				strokeWidth="0.857143"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1189_652">
				<rect width="12" height="12" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

export { GasIcon, CrossIcon, ArrowIcon, AggIcons,  SmolCheck };
