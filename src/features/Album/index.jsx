import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
const albumList =[
    {
        id: 1,
        name: 'Nhac 1',
        thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/2/d/7/c2d70f57499b4146651b892b8002f24d.jpg'
    },
    {
        id: 1,
        name: 'Nhac 2',
        thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/5/c/e/75cebcc51b9e1bc24b5a1aacb4343c55.jpg'
    },
    {
        id: 3,
        name: 'Nhac 3',
        thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/3/b/0/13b0807b2c93b2ddff5ddc37e901201e.jpg'
    },
    
];

    return (
        <div>
            <h2>Có thể bạn đang nghe</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;