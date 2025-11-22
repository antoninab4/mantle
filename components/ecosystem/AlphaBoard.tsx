
// This component has been deprecated and replaced by EcosystemHub.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const AlphaBoard: React.FC = () => {
    return <Navigate to="/ecosystem" replace />;
};

export default AlphaBoard;
