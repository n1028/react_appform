import React from "react";
import styled from "styled-components";

export const Header = () => {
	return (
		<SHeader>
			<p>ヘッダー</p>
		</SHeader>
	);
};

const SHeader = styled.header`
	background-color: #fff;
	text-align: center;
	border: 1px solid #808080;
	width: 100%;
	padding: 10px;
`;