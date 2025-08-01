function SocialLink({ platform, checked }) {
  return (
    <div className={`social-link ${checked ? 'checked' : ''}`}>
      <span className="checkbox">
        {checked ? '✓' : ''}
      </span>
      <span className="platform">{platform}</span>
    </div>
  );
}

export default SocialLink;