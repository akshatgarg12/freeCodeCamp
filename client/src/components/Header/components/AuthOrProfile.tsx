/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// @ts-nocheck
import React from 'react';
import { Link, borderColorPicker, AvatarRenderer } from '../../helpers';
import { useTranslation } from 'react-i18next';
import Login from '../components/Login';

export interface AuthOrProfileProps {
  user?: Object;
}
const AuthOrProfile = ({ user }: AuthOrProfileProps): JSX.Element => {
  const { t } = useTranslation();
  const isUserDonating = user && user.isDonating;
  const isUserSignedIn = user && user.username;
  const isTopContributor =
    user && user.yearsTopContributor && user.yearsTopContributor.length > 0;

  const badgeColorClass = borderColorPicker(isUserDonating, isTopContributor);

  if (!isUserSignedIn) {
    return (
      <Login data-test-label='landing-small-cta'>{t('buttons.sign-in')}</Login>
    );
  } else {
    return (
      <>
        <Link
          className={`avatar-nav-link ${badgeColorClass}`}
          to={`/${user.username}`}
        >
          <AvatarRenderer
            picture={user.picture}
            size='sm'
            userName={user.username}
          />
        </Link>
      </>
    );
  }
};

AuthOrProfile.displayName = 'AuthOrProfile';
export default AuthOrProfile;
