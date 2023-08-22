import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from "../Tree/TreeNode.module.css";
import classNames from 'classnames';

import Image from 'next/image'

// 예시사진
import Rectangle from '../../public/images/Rectangle.png'



const TreeNode = (props: any) => {

	console.log(props.img_open);

	const [img_box_close, setImg_box_close] = useState(false);

	// useEffect(()=>{
	// 	setImg_box_close(props.img_open);
	// },[img_box_close])

	const [big_img , setBig_img] = useState(false);

	const [TreeNode_Choice, setTreeNode_Choice] = useState(false);

	return(
		<div className={styles.TreeNode_wrap}>
			<div className={classNames({[styles.TreeNode_box]: true, [styles.Choice]: TreeNode_Choice, [styles.close]: img_box_close})}>
				<div className={styles.TreeNode_btn_wrap}>
					<span className={styles.num}>1</span>
					<div className={styles.btn_wrap}>
						<button onClick={()=>{setImg_box_close(!img_box_close)}}><i className='xi-angle-left'></i></button>
						<button onClick={()=>{setBig_img(true)}}><i className='xi-zoom-in'></i></button>
						<button><i className='xi-trash-o'></i></button>
					</div>
				</div>

				<div className={classNames({[styles.img_box]: true, [styles.close]: img_box_close})}>
					<div className={styles.img_wrap} onClick={()=>{setTreeNode_Choice(!TreeNode_Choice)}}>
						<Image src={Rectangle} alt="" />
					</div>

					<button className={styles.Add_Variation_btn}>Add Variation</button>
				</div>
				
			</div>

			<button className={styles.Plus_btn}>
				<i className='xi-plus'></i>
			</button>

			<div 
				className={classNames({[styles.big_img_wrap]: true, [styles.open]: big_img})}
			>
				<div className={styles.img_wrap}>
					<div className={styles.btn_wrap}>
						<button><i className='xi-download' ></i></button>
						<button onClick={()=>{setBig_img(false)}}><i className='xi-close'></i></button>
					</div>
					<Image src={Rectangle} alt="" />
				</div>
			</div>
		</div>
	)
}

export default TreeNode;