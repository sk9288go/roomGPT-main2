import React, { useState } from 'react';

import Link from 'next/link';

import styles from "../Tree/TreeCanvas.module.css";
import classNames from 'classnames';

import Image from 'next/image'

import ScrollContainer from 'react-indiana-drag-scroll'

import TreeNode from "./TreeNode";




const TreeCanvas = () => {
	// 숨긴이미지 한번에 열기
	const [all_open_img, setAll_open_img] = useState(false);

	return(
		<div className={styles.TreeCanvas_wrap}>
			<ScrollContainer className="scroll-container">
				<div className={styles.TreeCanvas_box}>
					<ul className={classNames({[styles.tree_img_list]: true, [styles.close]: true})}>
						<li>
							<TreeNode img_open={all_open_img}></TreeNode>
							<ul  className={styles.tree_img_list}>
								<li>
									<TreeNode img_open={all_open_img}></TreeNode>
								</li>
							</ul>
						</li>
						<li>
							<TreeNode img_open={all_open_img}></TreeNode>
							<ul  className={styles.tree_img_list}>
								<li>
									<TreeNode img_open={all_open_img}></TreeNode>
									<ul  className={styles.tree_img_list}>
										<li>
											<TreeNode img_open={all_open_img}></TreeNode>
											<ul  className={styles.tree_img_list}>
												<li>
													<TreeNode img_open={all_open_img}></TreeNode>
												</li>
												<li>
													<TreeNode img_open={all_open_img}></TreeNode>
												</li>
												<li>
													<TreeNode img_open={all_open_img}></TreeNode>
												</li>
											</ul>
										</li>
										<li>
											<TreeNode img_open={all_open_img}></TreeNode>
										</li>
										<li>
											<TreeNode img_open={all_open_img}></TreeNode>
										</li>
									</ul>
								</li>
								<li>
									<TreeNode img_open={all_open_img}></TreeNode>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</ScrollContainer>
			{/* <div className={styles.all_open_btn} >
				<button onClick={()=>{setAll_open_img(false)}}>sadasdasdasdasdasdasdasdasdasd</button>
			</div> */}
		</div>
	)
}

export default TreeCanvas;