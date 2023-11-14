import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import userImg from '../../images/product_img/user.png';

export default function User() {

    const [value, setValue] = React.useState<number | null>(4);

    return (
        <div className='User'>
            <img src={userImg} alt="" />
            <div className="nameStarts">
                <p>Имя Фамилия</p>
                <Box
                    sx={{
                        '& > legend': { mt: 4 },
                    }}
                >
                    <Rating
                    className='Stars'
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
            </div>
        </div>
    )
}
