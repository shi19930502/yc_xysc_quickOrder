<template>
	<yd-layout>
		<div id="UserSetting">
			<div slot='top' class="header">
				<div>
					<a v-if='$root.userInfo.typeId=="merchant"' href="#/f_index" class="header_left">首页</a>
					<div v-else></div>
				</div>
				<div class="name">系统设置</div>
				<div>
					<a v-if='$root.userInfo.typeId=="merchant"' href="javascript:;"></a>
					<div v-else></div>
				</div>
			</div>
			<yd-cell-group>
				<yd-cell-item arrow @click.native="show1=true">
					<span slot="left">修改密码</span>
				</yd-cell-item>
			</yd-cell-group>
			<yd-cell-group v-if='false'>
				<yd-cell-item arrow type="link" href="#">
					<span slot="left">意见反馈</span>
				</yd-cell-item>
				<yd-cell-item arrow type="link" href="#">
					<span slot="left">关于</span>
				</yd-cell-item>
			</yd-cell-group>
			<yd-button @click.native="logOut" size="large" type="hollow">切换账号</yd-button>
			<!--<yd-button @click.native="logOut" size="large" type="hollow">退出登录</yd-button>-->
			<yd-popup v-model="show1" position="bottom" height="100%">
				<div class="popup">
					<div class="popup-title flex flex-x-end flex-y-center">
						<!--<strong>修改密码</strong>-->
						<yd-icon name="error" @click.native="show1=false" size="0.45rem"></yd-icon>
					</div>
					<yd-cell-group>
						<yd-cell-item>
							<span slot="left">
	              <div class="lable">
	                <strong>原密码</strong>
	              </div>
	            </span>
							<yd-input slot="right" type="password" v-model="oldPassword" max="20" :show-success-icon="false" placeholder="请输入旧密码"></yd-input>
						</yd-cell-item>

						<yd-cell-item>
							<span slot="left">
	              <div class="lable">
	                <strong>新密码</strong>
	              </div>
	            </span>
							<yd-input slot="right" type="password" v-model="newPassword" placeholder="请输入新密码" :show-success-icon="false"></yd-input>
						</yd-cell-item>

						<yd-cell-item>
							<span slot="left">
	              <div class="lable">
	                <strong>确认密码</strong>
	              </div>
	            </span>
							<yd-input slot="right" type="password" v-model="newPassword2" placeholder="请再次输入新密码" :show-success-icon="false"></yd-input>
						</yd-cell-item>
					</yd-cell-group>
				</div>
				<div class="flex flex-x-center" style="padding: 0 0.24rem;">
					<div @click="updateMyPassword" class="loginbtn flex flex-y-center flex-x-center">
						<span>确认修改</span>
					</div>
				</div>
			</yd-popup>
		</div>
	</yd-layout>
</template>
<script>
	export default {
		data() {
			return {
				show1: false,
				oldPassword: '',
				newPassword: '',
				newPassword2: ''
			}
		},
		created() {
			this.$store.dispatch('changeNavBarTitle', '设置')
			if(!this.$root.userInfo.typeId) {
				if(sessionStorage.getItem('isQrCode') == 0) {
					this.$router.push({
						name: 'login'
					})
				} else {
					this.$router.push({
						name: 'f_login'
					})
				}
			}
		},
		methods: {
			/**
			 * 修改密码
			 */
			updateMyPassword() {
				var o = {
					oldPassword: this.oldPassword,
					newPassword: this.newPassword,
					newPassword2: this.newPassword2
				}
				if(o.oldPassword == '') {
					this.$dialog.alert({
						mes: '请输入原密码'
					})
					return false
				}
				if(o.newPassword == '') {
					this.$dialog.alert({
						mes: '请输入新密码'
					})
					return false
				}
				if(o.newPassword2 == '') {
					this.$dialog.alert({
						mes: '请再次输入新密码'
					})
					return false
				}
				if(o.newPassword2 != o.newPassword) {
					this.$dialog.alert({
						mes: '两次输入密码不一致'
					})
					return false
				}

				this.postRequest('user/updateMyPassword', {
					oldPassword: o.oldPassword,
					newPassword: o.newPassword
				}, false, true).then(resp => {
					if(resp.data && resp.data.state == 0) {
						this.$dialog.toast({
							mes: '修改成功',
							timeout: 1200,
							icon: 'success',
							callback: function() {
								this.logOut()
								this.show1 = false
							}.bind(this)
						});
					} else {
						this.$dialog.alert({
							mes: resp.data.msg
						})
					}
				})
			},
			/**
			 * 退出登录
			 */
			logOut() {
				//				localStorage.removeItem('userInfo')
				//				localStorage.removeItem('settlementParam')
				//				localStorage.clear()
				//				this.$router.push({
				//					name: 'Login',
				//					redirect: {
				//						name: 'Login'
				//					}
				//				})
				this.$dialog.confirm({
					title: '提示：',
					mes: '是否切换账号？',
					opts: () => {
						if(sessionStorage.getItem('isQrCode') == 0) {
							this.$router.push({
								name: 'login'
							})
						} else {
							this.$router.push({
								name: 'f_login'
							})
						}
					}
				});

			}
		}
	};
</script>
<style lang="scss">
	#UserSetting {
		.lable {
			width: 1.8rem;
			font-size: 0.3rem;
		}
		.loginbtn {
			width: 100%;
			height: 0.78rem;
			background: #6FB138;
			border-radius: 0.39rem;
			color: #fff;
			font-size: 0.31rem;
			text-align: center;
		}
		color: #2F3927;
		.yd-cell-arrow:after {
			margin-left: 0.1rem;
		}
		.yd-btn-hollow {
			border: none;
		}
	}
</style>