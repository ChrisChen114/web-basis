import React from 'react'
import { useNavigate } from 'react-router-dom'

// Header是一般組件，不是路由組件，放在components文件夾下
// 路由組件都放在pages下面
export default function Header() {
    const navigate = useNavigate();

    // 后退和前进都属于编程式路由导航
    // ←后退
    function back() {
        navigate(-1);
    }

    // →前进
    function forward() {
        navigate(1);
    }

    return (
        // <div>Header</div>
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={back}>←后退</button>
                <button onClick={forward}>→前进</button>
            </div>
        </div>
    )
}
