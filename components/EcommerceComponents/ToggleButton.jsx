import React from 'react'
import styles from '../../styles/toggleButton.module.css'
const ToggleButton = ({ toggle, handleToggleChane }) => {
    return (
        <>
            <div className={styles.toggle_container} onClick={handleToggleChane}>
                <div className={` ${styles.toggle_btn}  ${!toggle ? "disable":""} `}>
                    {!toggle ? 'Yes' : 'No'}
                </div>
            </div>



             {/* <div onClick={handleToggleChane} className='flex gap- justify-between bg-red-300 w-20 rounded-full px-2'>
                <div >Yes</div>
                <div >No</div>
            </div> */}

        </>
    )
}

export default ToggleButton