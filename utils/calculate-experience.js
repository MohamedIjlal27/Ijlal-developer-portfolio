// Utility function to calculate total years of experience
export const calculateTotalExperience = (experiences) => {
  const allDates = [];
  
  experiences.forEach(experience => {
    const duration = experience.duration;
    // Extract dates from duration string like "(December 2024 - September 2025)"
    const dateMatch = duration.match(/\(([^)]+)\)/);
    if (dateMatch) {
      const dateRange = dateMatch[1];
      const dateParts = dateRange.split(' - ').map(date => date.trim());
      
      if (dateParts.length === 2) {
        const [startDate, endDate] = dateParts;
        
        // Parse start and end dates
        const start = new Date(startDate);
        const end = endDate && (endDate.toLowerCase().includes('present') || endDate.toLowerCase().includes('current')) 
          ? new Date() 
          : new Date(endDate);
        
        // Check if dates are valid
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
          allDates.push({ start, end });
        }
      }
    }
  });
  
  if (allDates.length === 0) return "0 months";
  
  // Find the earliest start date and latest end date
  const earliestStart = new Date(Math.min(...allDates.map(d => d.start.getTime())));
  const latestEnd = new Date(Math.max(...allDates.map(d => d.end.getTime())));
  
  // Calculate total months from earliest start to latest end
  const totalMonths = (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 + 
                     (latestEnd.getMonth() - earliestStart.getMonth());
  
  // Convert months to years and months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years > 0 && months > 0) {
    return `${years} years ${months} months`;
  } else if (years > 0) {
    return `${years} years`;
  } else if (months > 0) {
    return `${months} months`;
  } else {
    return "0 months";
  }
};
