import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='logoArea'>
                <h1>YOUTUBE</h1>
            </div>
            <div className='searchInputArea'>
                <input
                 type="search"
                 placeholder='검색어를 입력하세요'
                 className='searchInput'
                 />
            </div>
            <div className='topMenuArea'>
                <button>알림</button>
                <button>동영상업로드</button>
                <button>프로필</button>
            </div>
        </div>
    );
};

export default Header;