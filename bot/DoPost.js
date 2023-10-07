/**
 * Версия 1
 * Можно легко отключать от контейнера и передеплоить как web app, а можно ли и то и то??
 */

let contents;
// bot service variables
let chat_id;
let user_id;
let name;
let nick;
let date;
let message_id;
let text = "";
let data;
let textToSend;
let language_code;



function debugDoPost(){
  let tDebug = table.getSheetByName("Debug");
  let e = tDebug.getRange('D1').getValue();
  doPost(JSON.parse(e));
  // d
}

function doPost(e) {
  try{
    entryPoint(e);
  }
  catch (err) {
    botSendText(errorMessagesChat, err.stack);
  }
}

function entryPoint(e){

  logDebug(e);
  
  contents = JSON.parse(e.postData.contents);

  if (contents.message != null) {
    messageReceived(contents.message);
  }

  else if (contents.callback_query != null) {
    callbackQueryReceived(contents.callback_query);
  }

  else if (contents.edited_message != null) {
    editMessageReceived(contents.edited_message);
  }

  return;

  // other updates
  /*
  else if (contents.channel_post !== null) {

  }

  else if (contents.edited_channel_post !== null) {

  }

  else if (contents.inline_query !== null) {

  }

  else if (contents.chosen_inline_result !== null) {

  }

  else if (contents.shipping_query !== null) {

  }

  else if (contents.pre_checkout_query !== null) {

  }

  else if (contents.poll !== null) {

  }

  else if (contents.poll_answer !== null) {

  }

  else if (contents.my_chat_member !== null) {

  }

  else if (contents.poll !== null) {

  }

  else if (contents.poll_answer !== null) {

  }

  else if (contents.my_chat_member !== null) {

  }

  else if (contents.chat_member !== null) {

  }

  else if (contents.chat_join_request !== null) {

  }
  */


  /**
   * https://core.telegram.org/bots/api#update
   * Field 	Type 	Description
   * update_id 	Integer 	The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
   * message 	Message 	Optional. New incoming message of any kind - text, photo, sticker, etc.
   * edited_message 	Message 	Optional. New version of a message that is known to the bot and was edited
   * channel_post 	Message 	Optional. New incoming channel post of any kind - text, photo, sticker, etc.
   * edited_channel_post 	Message 	Optional. New version of a channel post that is known to the bot and was edited
   * inline_query 	InlineQuery 	Optional. New incoming inline query
   * chosen_inline_result 	ChosenInlineResult 	Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
   * callback_query 	CallbackQuery 	Optional. New incoming callback query
   * shipping_query 	ShippingQuery 	Optional. New incoming shipping query. Only for invoices with flexible price
   * pre_checkout_query 	PreCheckoutQuery 	Optional. New incoming pre-checkout query. Contains full information about checkout
   * poll 	Poll 	Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
   * poll_answer 	PollAnswer 	Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
   * my_chat_member 	ChatMemberUpdated 	Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
   * chat_member 	ChatMemberUpdated 	Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates.
   * chat_join_request 	ChatJoinRequest 	Optional. A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates.
   */


}

