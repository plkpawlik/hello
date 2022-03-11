import React from 'react';

//  local contexts
import { useAuthContext } from '@/contexts/auth.context';

//  local components
import UserView from '../../components/user-view';

//  component style
import './index.scss';


/*  Component logic
/*   *   *   *   *   *   *   *   *   *   */

export default function User() {
    
    //  parse user
    const { user } = useAuthContext();

    
/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <UserView user={ user } />
    </>
)};