import RoleDisplay from './RoleDisplay'

/**
 * RoleDisplayRow - A row of 3 RoleDisplay components
 *
 * @param {Array<{title: string, body: string|string[], backgroundColor?: string, backgroundImage?: string, backgroundImageOpacity?: number}>} roles - Array of 3 role configs (same shape as RoleDisplay props)
 * @param {string} className - Additional CSS classes on the row wrapper
 */
function RoleDisplayRow({ roles = [], className = '' }) {
  const displayRoles = roles.slice(0, 3)

  return (
    <div
      className={`flex flex-col sm:flex-row  sm:gap-[.2rem] md: gap-[.4rem] lg:gap-[.6rem] 2xl:gap-[.8rem] items-stretch justify-center ${className}`}
      role="list"
      aria-label="Role displays"
    >
      {displayRoles.map((role, index) => (
        <div key={index} className="flex-1 min-w-0 max-w-2xl sm:max-w-none" role="listitem">
          <RoleDisplay {...role} fullWidth contentClassName={index === 0 ? '!pl-14 sm:!pl-16' : ''} />
        </div>
      ))}
    </div>
  )
}

export default RoleDisplayRow
