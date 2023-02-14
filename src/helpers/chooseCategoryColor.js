import { INCOME_CATEGORIES, EXPENSE_CATEGORIES, EQUITY_CODE } from 'constants';

export const chooseCategoryColor = category => {
  switch (category) {
    case 0:
    case INCOME_CATEGORIES[0]:
    case EXPENSE_CATEGORIES[0]:
    case EXPENSE_CATEGORIES[1]:
    case EQUITY_CODE[0]:
      return 'success';
    case 1:
    case INCOME_CATEGORIES[1]:
    case EXPENSE_CATEGORIES[2]:
    case EXPENSE_CATEGORIES[5]:
    case EQUITY_CODE[1]:
      return 'info';
    case 2:
    case INCOME_CATEGORIES[2]:
    case EXPENSE_CATEGORIES[3]:
    case EXPENSE_CATEGORIES[4]:
    case EQUITY_CODE[2]:
      return 'warning';
    case 3:
    case INCOME_CATEGORIES[3]:
    case EXPENSE_CATEGORIES[8]:
    case EXPENSE_CATEGORIES[9]:
    case EQUITY_CODE[3]:
      return 'danger';
    case 4:
    case EXPENSE_CATEGORIES[6]:
    case EXPENSE_CATEGORIES[7]:
    case EQUITY_CODE[4]:
      return 'link';
    default:
      return 'primary';
  }
};
