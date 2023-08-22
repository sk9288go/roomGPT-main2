import React, { useState } from 'react';

import Link from 'next/link';

import styles from "../Tree/TreeCanvas.module.css";
import classNames from 'classnames';

import Image from 'next/image'

import ScrollContainer from 'react-indiana-drag-scroll'

import TreeNode from "./TreeNode";


const TreeCanvas2 = () => {
	return(
		<div className={styles.TreeCanvas_wrap}>
			<ScrollContainer className="scroll-container">
				<div className={styles.TreeCanvas_box}>
					<ul className={classNames({[styles.tree_img_list]: true, [styles.close]: true})}>
						<li>
							<TreeNode name="asd"></TreeNode>
							<ul  className={styles.tree_img_list}>
								<li>
									<TreeNode></TreeNode>
								</li>
							</ul>
						</li>
						<li>
							<TreeNode></TreeNode>
							<ul  className={styles.tree_img_list}>
								<li>
									<TreeNode></TreeNode>
									<ul  className={styles.tree_img_list}>
										<li>
											<TreeNode></TreeNode>
											<ul  className={styles.tree_img_list}>
												<li>
													<TreeNode></TreeNode>
												</li>
												<li>
													<TreeNode></TreeNode>
												</li>
												<li>
													<TreeNode></TreeNode>
												</li>
											</ul>
										</li>
										<li>
											<TreeNode></TreeNode>
										</li>
										<li>
											<TreeNode></TreeNode>
										</li>
									</ul>
								</li>
								<li>
									<TreeNode></TreeNode>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</ScrollContainer>
		</div>
	)
}

export default TreeCanvas2;