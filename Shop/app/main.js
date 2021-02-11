import ControllerBot from './components/bot/controller-bot.js';
import ControllerCart from './components/cart/controller-cart.js';
import ControllerFilters from './components/filters/controller-filters.js';
import ControllerOrderHistory from './components/orderHistory/controller-orderHistory.js';
import ControllerOrders from './components/orders/controller-orders.js';
import ControllerPagination from './components/pagination/controller-pagination.js';
import ControllerRecord from './components/record/controller-record.js';
import ControllerSpinner from './components/spinner/controller-spinner.js';

const spinner = new ControllerSpinner();
const record = new ControllerRecord();
const bot = new ControllerBot ();
const filters = new ControllerFilters();
const cart = new ControllerCart();
const order = new ControllerOrders();
const orderHistory = new ControllerOrderHistory();
const pagination = new ControllerPagination();
