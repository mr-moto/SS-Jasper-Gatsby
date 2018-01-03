import React from 'react';
import styles from './WorkPost.module.scss'

const WorkPost = ({thumbnail}) => {
    return (
        <div className={styles.container}>
			<img className={styles.img} src={thumbnail} alt=""/>
		</div>
    )
}

export default WorkPost